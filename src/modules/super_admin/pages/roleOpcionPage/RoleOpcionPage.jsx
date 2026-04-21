import styles from "./role_opcion_page.module.css";
import { useState, useEffect } from "react";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiChevronDown,
  FiChevronRight,
  FiSettings,
  FiGrid,
  FiX,
  FiCheck,
} from "react-icons/fi";
import {
  getRolesService,
  getOpcionesByRolService,
  createRolService,
  createOpcionService,
  updateRolService,
  updateOpcionService,
  deleteRolService,
  deleteOpcionService,
} from "../../services/roleOpcionService";

function RoleOpcionPage() {
  const [roles, setRoles] = useState([]);
  const [selectedRol, setSelectedRol] = useState(null);
  const [opciones, setOpciones] = useState([]);
  const [expandedRoles, setExpandedRoles] = useState({});
  const [expandedOpciones, setExpandedOpciones] = useState({});
  const [loading, setLoading] = useState(false);

  // Modals
  const [showRolModal, setShowRolModal] = useState(false);
  const [showOpcionModal, setShowOpcionModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Form states
  const [rolForm, setRolForm] = useState({
    nombre: "",
    icono: "FiGrid",
    descripcion: "",
  });
  const [opcionForm, setOpcionForm] = useState({
    nombre: "",
    icono: "",
    path: "",
    padre_id: null,
    orden: 1,
  });

  // Icons available
  const iconosDisponibles = [
    "FiGrid",
    "FiHome",
    "FiUsers",
    "FiBook",
    "FiDollarSign",
    "FiMail",
    "FiSettings",
    "FiCalendar",
    "FiFileText",
    "FiBarChart2",
    "FiLayers",
    "FiClipboard",
  ];

  // Cargar roles al iniciar
  useEffect(() => {
    loadRoles();
  }, []);

  const loadRoles = async () => {
    try {
      setLoading(true);
      const data = await getRolesService();
      setRoles(data);
    } catch (error) {
      console.error("Error cargando roles:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadOpciones = async (rolId) => {
    try {
      const data = await getOpcionesByRolService(rolId);
      // Construir árbol de opciones
      const tree = buildTree(data);
      setOpciones(tree);
    } catch (error) {
      console.error("Error cargando opciones:", error);
    }
  };

  const buildTree = (items, parentId = null) => {
    return items
      .filter((item) => item.padre_id === parentId)
      .map((item) => ({
        ...item,
        children: buildTree(items, item.id),
      }));
  };


  const toggleOpcion = (opcionId) => {
    setExpandedOpciones((prev) => ({
      ...prev,
      [opcionId]: !prev[opcionId],
    }));
  };

  const toggleRol = async (rol) => {
    if (selectedRol?.id === rol.id) {
      setSelectedRol(null);
      setOpciones([]);
    } else {
      setSelectedRol(rol);
      await loadOpciones(rol.id);
    }

    setExpandedRoles((prev) => ({
      ...prev,
      [rol.id]: !prev[rol.id],
    }));
  };

  // Crear/Editar Rol
  const handleSaveRol = async (e) => {
    e.preventDefault();
    try {
      if (editingItem) {
        await updateRolService(editingItem.id, rolForm);
      } else {
        await createRolService(rolForm);
      }
      setShowRolModal(false);
      setRolForm({ nombre: "", icono: "FiGrid", descripcion: "" });
      setEditingItem(null);
      loadRoles();
    } catch (error) {
      console.error("Error guardando rol:", error);
      alert("Error al guardar el rol");
    }
  };

  // Crear/Editar Opción
  const handleSaveOpcion = async (e) => {
    e.preventDefault();
    try {
      const data = { ...opcionForm, rol_id: selectedRol.id };
      if (editingItem) {
        await updateOpcionService(editingItem.id, data);
      } else {
        await createOpcionService(data);
      }
      setShowOpcionModal(false);
      setOpcionForm({
        nombre: "",
        icono: "",
        path: "",
        padre_id: null,
        orden: 1,
      });
      setEditingItem(null);
      loadOpciones(selectedRol.id);
    } catch (error) {
      console.error("Error guardando opción:", error);
      alert("Error al guardar la opción");
    }
  };

  const handleDeleteRol = async (rolId) => {
    if (!confirm("¿Estás seguro de eliminar este rol?")) return;
    try {
      await deleteRolService(rolId);
      if (selectedRol?.id === rolId) {
        setSelectedRol(null);
        setOpciones([]);
      }
      loadRoles();
    } catch (error) {
      console.error("Error eliminando rol:", error);
      alert("Error al eliminar el rol");
    }
  };

  const handleDeleteOpcion = async (opcionId) => {
    if (!confirm("¿Estás seguro de eliminar esta opción?")) return;
    try {
      await deleteOpcionService(opcionId);
      loadOpciones(selectedRol.id);
    } catch (error) {
      console.error("Error eliminando opción:", error);
      alert("Error al eliminar la opción");
    }
  };

  const openCreateRolModal = () => {
    setEditingItem(null);
    setRolForm({ nombre: "", icono: "FiGrid", descripcion: "" });
    setShowRolModal(true);
  };

  const openEditRolModal = (rol) => {
    setEditingItem(rol);
    setRolForm({
      nombre: rol.nombre,
      icono: rol.icono || "FiGrid",
      descripcion: rol.descripcion || "",
    });
    setShowRolModal(true);
  };

  const openCreateOpcionModal = (padreId = null) => {
    setEditingItem(null);
    setOpcionForm({
      nombre: "",
      icono: "",
      path: "",
      padre_id: padreId,
      orden: 1,
    });
    setShowOpcionModal(true);
  };

  const openEditOpcionModal = (opcion) => {
    setEditingItem(opcion);
    setOpcionForm({
      nombre: opcion.nombre,
      icono: opcion.icono || "",
      path: opcion.path || "",
      padre_id: opcion.padre_id,
      orden: opcion.orden || 1,
    });
    setShowOpcionModal(true);
  };

  // Renderizar árbol de opciones recursivamente
  const renderOpcionesTree = (items, level = 0) => {
    console.log("items", items);
    return items.map((opcion) => (
      <div
        key={opcion.id}
        className={styles.opcionItem}
        style={{ marginLeft: `${level * 30}px` }}
      >
        <div className={styles.opcionRow}>
          <div className={styles.opcionInfo}>
            {opcion.children?.length > 0 && (
              <span
                className={styles.expandIconWrapper}
                onClick={() => toggleOpcion(opcion.id)}
              >
                {expandedOpciones[opcion.id] ? (
                  <FiChevronDown className={styles.expandIcon} />
                ) : (
                  <FiChevronRight className={styles.expandIcon} />
                )}
              </span>
            )}
            <span className={styles.opcionNombre}>{opcion.nombre}</span>
            {opcion.path && (
              <span className={styles.opcionPath}>{opcion.path}</span>
            )}
          </div>
          <div className={styles.opcionActions}>
            <button
              className={styles.btnAction}
              onClick={() => openCreateOpcionModal(opcion.id)}
              title="Agregar sub-opción"
            >
              <FiPlus size={14} />
            </button>
            <button
              className={styles.btnAction}
              onClick={() => openEditOpcionModal(opcion)}
              title="Editar"
            >
              <FiEdit2 size={14} />
            </button>
            <button
              className={`${styles.btnAction} ${styles.btnDelete}`}
              onClick={() => handleDeleteOpcion(opcion.id)}
              title="Eliminar"
            >
              <FiTrash2 size={14} />
            </button>
          </div>
        </div>
        {opcion.children?.length > 0 && expandedOpciones[opcion.id] && (
          <div className={styles.opcionChildren}>
            {renderOpcionesTree(opcion.children, level + 1)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          <FiSettings className={styles.titleIcon} />
          Gestión de Roles y Opciones
        </h2>
        <button className={styles.btnPrimary} onClick={openCreateRolModal}>
          <FiPlus />
          Nuevo Rol
        </button>
      </div>

      <div className={styles.content}>
        {/* Lista de Roles */}
        <div className={styles.rolesSection}>
          <div className={styles.rolesList}>
            <h3 className={styles.sectionTitle}>Roles del Sistema</h3>
            {roles.map((rol) => (
              <div
                key={rol.id}
                className={`${styles.rolCard} ${selectedRol?.id === rol.id ? styles.rolCardActive : ""}`}
              >
                <div
                  className={styles.rolHeader}
                  onClick={() => toggleRol(rol)}
                >
                  <div className={styles.rolInfo}>
                    {expandedRoles[rol.id] ? (
                      <FiChevronDown className={styles.rolExpandIcon} />
                    ) : (
                      <FiChevronRight className={styles.rolExpandIcon} />
                    )}
                    <span className={styles.rolNombre}>{rol.nombre}</span>
                  </div>
                  <div
                    className={styles.rolActions}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className={styles.btnAction}
                      onClick={() => openEditRolModal(rol)}
                      title="Editar rol"
                    >
                      <FiEdit2 size={14} />
                    </button>
                    <button
                      className={`${styles.btnAction} ${styles.btnDelete}`}
                      onClick={() => handleDeleteRol(rol.id)}
                      title="Eliminar rol"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                </div>

                {selectedRol?.id === rol.id && (
                  <div className={styles.opcionesSection}>
                    <div className={styles.opcionesHeader}>
                      <h4 className={styles.opcionesTitle}>Opciones de Menú</h4>
                      <button
                        className={styles.btnAddOpcion}
                        onClick={() => openCreateOpcionModal(null)}
                      >
                        <FiPlus size={14} />
                        Agregar
                      </button>
                    </div>

                    {opciones.length === 0 ? (
                      <p className={styles.emptyState}>
                        No hay opciones configuradas
                      </p>
                    ) : (
                      <div className={styles.opcionesTree}>
                        {renderOpcionesTree(opciones)}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {roles.length === 0 && !loading && (
              <p className={styles.emptyState}>No hay roles configurados</p>
            )}
          </div>

          <div>
            <h5>lista de personal que tiene este rol</h5>
          </div>
        </div>
      </div>

      {/* Modal Crear/Editar Rol */}
      {showRolModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowRolModal(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>{editingItem ? "Editar Rol" : "Nuevo Rol"}</h3>
              <button
                className={styles.btnClose}
                onClick={() => setShowRolModal(false)}
              >
                <FiX />
              </button>
            </div>
            <form onSubmit={handleSaveRol} className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label>Nombre del Rol *</label>
                <input
                  type="text"
                  value={rolForm.nombre}
                  onChange={(e) =>
                    setRolForm({ ...rolForm, nombre: e.target.value })
                  }
                  placeholder="Ej: Administrador"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Icono</label>
                <select
                  value={rolForm.icono}
                  onChange={(e) =>
                    setRolForm({ ...rolForm, icono: e.target.value })
                  }
                >
                  {iconosDisponibles.map((icono) => (
                    <option key={icono} value={icono}>
                      {icono}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Descripción</label>
                <textarea
                  value={rolForm.descripcion}
                  onChange={(e) =>
                    setRolForm({ ...rolForm, descripcion: e.target.value })
                  }
                  placeholder="Descripción del rol..."
                  rows={3}
                />
              </div>
              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.btnCancel}
                  onClick={() => setShowRolModal(false)}
                >
                  Cancelar
                </button>
                <button type="submit" className={styles.btnSave}>
                  <FiCheck />
                  {editingItem ? "Actualizar" : "Crear"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Crear/Editar Opción */}
      {showOpcionModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowOpcionModal(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>{editingItem ? "Editar Opción" : "Nueva Opción de Menú"}</h3>
              <button
                className={styles.btnClose}
                onClick={() => setShowOpcionModal(false)}
              >
                <FiX />
              </button>
            </div>
            <form onSubmit={handleSaveOpcion} className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label>Nombre de la Opción *</label>
                <input
                  type="text"
                  value={opcionForm.nombre}
                  onChange={(e) =>
                    setOpcionForm({ ...opcionForm, nombre: e.target.value })
                  }
                  placeholder="Ej: Gestión de Usuarios"
                  required
                />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Icono (opcional)</label>
                  <select
                    value={opcionForm.icono}
                    onChange={(e) =>
                      setOpcionForm({ ...opcionForm, icono: e.target.value })
                    }
                  >
                    <option value="">Sin icono</option>
                    {iconosDisponibles.map((icono) => (
                      <option key={icono} value={icono}>
                        {icono}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Orden</label>
                  <input
                    type="number"
                    min="1"
                    value={opcionForm.orden}
                    onChange={(e) =>
                      setOpcionForm({
                        ...opcionForm,
                        orden: parseInt(e.target.value),
                      })
                    }
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Ruta (Path)</label>
                <input
                  type="text"
                  value={opcionForm.path}
                  onChange={(e) =>
                    setOpcionForm({ ...opcionForm, path: e.target.value })
                  }
                  placeholder="Ej: /admin/usuarios"
                />
              </div>
              <div className={styles.formGroup}>
                <label>Padre (opcional)</label>
                <select
                  value={opcionForm.padre_id || ""}
                  onChange={(e) =>
                    setOpcionForm({
                      ...opcionForm,
                      padre_id: e.target.value || null,
                    })
                  }
                >
                  <option value="">Raíz (sin padre)</option>
                  {/* Aquí se deberían listar las opciones del rol */}
                </select>
                <small className={styles.helpText}>
                  Selecciona un padre para crear una sub-opción
                </small>
              </div>
              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.btnCancel}
                  onClick={() => setShowOpcionModal(false)}
                >
                  Cancelar
                </button>
                <button type="submit" className={styles.btnSave}>
                  <FiCheck />
                  {editingItem ? "Actualizar" : "Crear"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoleOpcionPage;
