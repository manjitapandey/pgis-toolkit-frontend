/* eslint-disable import/prefer-default-export */

export const tableData = [
  { id: '1', name: 'WOrld Bicycle Relief', admin: 'admin@worldbicyclereleif.org', projects: '5' },
  { id: '2', name: 'Shushovan', admin: 'Shushovan', projects: '5' },
  { id: '3', name: 'Shushovan', admin: 'Shushovan', projects: '5' },
  { id: '4', name: 'Shushovan', admin: 'Shushovan', projects: '5' },
  { id: '5', name: 'Shushovan', admin: 'Shushovan', projects: '5' },
  { id: '6', name: 'Shushovan', admin: 'Shushovan', projects: '5' },
];

export const dropdownOptions = [
  { id: 1, name: 'Basic Info' },
  { id: 2, name: 'Users' },
  { id: 3, name: 'Osm users' },
];

export const mapProjectOptions = [
  { id: '1', name: 'Transportation mapping Kenya 1', address: 'Malawi, Country' },
  { id: '2', name: 'Road mapping Kenya 1', address: 'Malawi, Country' },
  { id: '3', name: 'Transportation mapping', address: 'Malawi, Country' },
];

export const userTableData = [
  {
    id: '1',
    user: 'ChERISH Usrsula',
    phone: '984038261',
    email: 'email@worldbicyclereleif.org',
    role: 'Project Manager',
  },
  { id: '2', user: 'ChERISH Usrsula', phone: '984038261', email: 'sam.smith@mail.com', role: 'Project Manager' },
  { id: '3', user: 'ChERISH Usrsula', phone: '984038261', email: 'sam.smith@mail.com', role: 'Project Manager' },
  { id: '4', user: 'ChERISH Usrsula', phone: '984038261', email: 'sam.smith@mail.com', role: 'Project Manager' },
  { id: '5', user: 'ChERISH Usrsula', phone: '984038261', email: 'sam.smith@mail.com', role: 'Project Manager' },
  { id: '6', user: 'ChERISH Usrsula', phone: '984038261', email: 'sam.smith@mail.com', role: 'Project Manager' },
];

export const accordionOptions = [
  {
    id: '1',
    name: 'Baseline Data',
    type: 'checkbox',
    filter: [
      {
        uniqueId: '1',
        catName: 'Municipalty Boundary Municipalty Boundary',
        isSelected: false,
        icon: 'school',
      },
      {
        uniqueId: '2',
        catName: 'Municipalty Boundary',
        icon: 'school',
        isSelected: false,
      },
      {
        uniqueId: '3',
        catName: 'Boundary Data',
        isSelected: false,
        icon: 'school',
      },
    ],
  },
  {
    id: '2',
    name: 'Baseline Data',
    type: 'checkbox',
    filter: [
      {
        uniqueId: '1',
        catName: 'Municipalty Boundary Municipalty Boundary',
        isSelected: false,
      },
    ],
  },
];

export const switcherOptions = [
  { id: '1', name: 'Mapbox Outdoors' },
  { id: '2', name: 'OSM' },
  { id: '3', name: 'Topo Map' },
  { id: '4', name: 'Mapbox Light' },
  { id: '5', name: 'Monochrome' },
  { id: '6', name: 'Monochrome Midnight' },
];

export const checkboxOptions = [
  { id: '1', name: 'Health', isSelected: false },
  { id: '2', name: 'Education', isSelected: false },
  { id: '3', name: 'Road', isSelected: false },
  { id: '4', name: 'Building', isSelected: false },
  { id: '5', name: 'Tree', isSelected: false },
  { id: '6', name: 'Health', isSelected: false },
  { id: '7', name: 'Education', isSelected: false },
];

export const sidebarTabOptions = [
  { id: '1', name: 'Projects' },
  // { id: '2', name: 'Users' },
];

export const layerPopupTabOptions = [
  // { id: '1', name: 'OpenstreetMap' },
  { id: '2', name: 'Template' },
  { id: '3', name: 'Upload' },
  // { id: '4', name: 'Custom' },
  // { id: '5', name: 'WMS layer' },
];

export const projectPopupTabOptions = [
  { id: '1', name: 'Basic Info' },
  { id: '2', name: 'Location' },
];

export const selectOptions = ['Bagmati', 'Gandaki', 'Lumbini', 'Gandaki'];

export const selectSizeOptions = [
  { id: '1', name: 'Small', size: { height: '20', width: '20' } },
  { id: '2', name: 'Medium', size: { height: '32', width: '32' } },
  { id: '3', name: 'Large', size: { height: '48', width: '48' } },
];

export const vectorTileData = [
  {
    id: '1',
    checked: true,
    url: 'https://pccmis.karnali.gov.np/api/v1/layer_vectortile/{z}/{x}/{y}/?layer=district&pro_code=',
  },
];

export const optionTypeList = ['Individual', 'Group', 'Sub-layer'];

export const optionSelectList = ['Upload Area', 'Draw Area on Map'];

export const optionStyleList = ['Standard', 'Advance'];

export const paginationOptions = [
  { id: 1, value: 5, label: 5 },
  { id: 2, value: 10, label: 10 },
  { id: 3, value: 15, label: 15 },
  { id: 4, value: 20, label: 20 },
  { id: 5, value: 25, label: 25 },
  { id: 6, value: 30, label: 30 },
];

export const tabOptions = [
  {
    id: 1,
    name: 'Transport Need Assessment',
    icon: 'layers',
  },
  {
    id: 2,
    name: 'Planning Health Facilities',
    icon: 'health_and_safety',
  },
  {
    id: 2,
    name: 'Participator Risk Mapping',
    icon: 'warning_amber',
  },
];

export const geomTypes = ['Point', 'Polygon', 'LineString'];

export const tableHeaderData = ['Users', 'Roles'];

export const checkboxData = [
  { id: 1, name: 'Health', isSelected: false },
  { id: 1, name: 'Education', isSelected: false },
  { id: 1, name: 'Road', isSelected: false },
  { id: 1, name: 'Health', isSelected: false },
];
