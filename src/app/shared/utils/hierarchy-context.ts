export interface HierarchyContext {
  fkBusiness: string;
  fkFacility: string;
  fkBuilding: string;
  fkFloor: string;
  fkSection: string;
  fkOffice: string;
  fkDevice: string;
  fkSensor: string;
  sensorId: string;
  fkUtility: string;
  fkutility: string;
  sensorName: string;
  utilityName: string;
}

const STORAGE_KEY = 'emo.hierarchy-context';
const EMPTY_CONTEXT: HierarchyContext = {
  fkBusiness: '',
  fkFacility: '',
  fkBuilding: '',
  fkFloor: '',
  fkSection: '',
  fkOffice: '',
  fkDevice: '',
  fkSensor: '',
  sensorId: '',
  fkUtility: '',
  fkutility: '',
  sensorName: '',
  utilityName: ''
};

export function readHierarchyContext(routeState: unknown = history.state): HierarchyContext {
  let stored: Partial<HierarchyContext> = {};

  try {
    stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    sessionStorage.removeItem(STORAGE_KEY);
  }

  const state = routeState && typeof routeState === 'object'
    ? routeState as Partial<HierarchyContext>
    : {};

  const context: HierarchyContext = { ...EMPTY_CONTEXT, ...stored, ...state };
  saveHierarchyContext(context);
  return context;
}

export function saveHierarchyContext(context: Partial<HierarchyContext>): void {
  let existing: Partial<HierarchyContext> = {};

  try {
    existing = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    sessionStorage.removeItem(STORAGE_KEY);
  }

  const cleanContext = Object.fromEntries(
    Object.entries({ ...existing, ...context })
      .filter(([, value]) => value !== undefined && value !== null && value !== '')
  );

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(cleanContext));
}
