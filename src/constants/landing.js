/* eslint-disable import/prefer-default-export */
import case1 from '@Assets/images/case-1.jpg';
import working1 from '@Assets/images/working1.png';
import working2 from '@Assets/images/working2.png';
import working3 from '@Assets/images/working3.jpeg';
import working4 from '@Assets/images/working4.png';
import working5 from '@Assets/images/working5.png';
import working6 from '@Assets/images/working6.png';
import working7 from '@Assets/images/working7.png';

export const cardData = [
  {
    id: '1',
    heading: '1. Multi-source data import',
    description:
      'Allows importation of spatial data layers from multiple external sources such as OSM import and WMS layer import.',
  },
  {
    id: '2',
    heading: '2. Conduct data gap analysis',
    description: 'Supports data gap identification based on participatory approach and remote mapping.',
  },
  {
    id: '3',
    heading: '3. Do data collection planning',
    description: 'Provides standard USAFIRI data template for field data collection and mapping exercise.',
  },
  {
    id: '4',
    heading: '4. Upload collected data into USAFIRI',
    description: 'Supports multiple spatial data uploads into USAFIRI to visualize the data collection.',
  },
  {
    id: '5',
    heading: '5. Automatic data cleaning',
    description:
      'Facilitates data validation module to identify the geometry errors and supports automatic data cleaning.',
  },
  {
    id: '6',
    heading: '6. Spatial analysis for transport need assessment',
    description:
      'Supports spatial analysis operations such as proximity analysis, optimal route analysis, buffer analysis using available datasets.',
  },
  {
    id: '7',
    heading: '7. Map design and export',
    description: 'Publish a customized map based on standard USAFIRI map layout and existing data layers.',
  },
];

export const caseboxDetail = [
  {
    id: '1',
    heading: 'Transport Need Assessment',
    title: 'Mapping Kakamega, Kenya for Transportation Needs Assessment',
    description:
      'The first pilot of the Usafiri tool was conducted here. The learnings from this assessment drove the technical feature development of the tool.',
    date: 'Aug 2020 - Jan 2022',
    image: case1,
  },
  {
    id: '2',
    heading: 'birendranagar ASSESSMENT',
    title: 'Mapping Birendranagar , Surkhet  for Transportation Needs Assessment',
    description:
      'Local youths from birendranagar surkhet carried out a data collection exercise in rural and urban wards of BIRENDRANAGAR, SURKHET. This data was then uploaded to usafiri to conduct different basic transport need assessment and spatial analysis.',
    date: 'Feb 2023 - Mar 2023',
    image: case1,
  },
];

export const accordionDetails = [
  {
    id: '1',
    h4Header: 'How is this different than OpenStreetMaps?',
    description:
      'While OpenStreetMaps(OSM) provides solid standardized base attributes, by its design it cannot contain specific attributes. We allow the addition of extra attributes to OSM points, lines, and polygons. It is done by linking OSM attributes with Usafiri and adding the extra attributes in Usafiri.',
  },
  {
    id: '2',
    h4Header: 'Does Usafiri allow data exports?',
    description: 'Yes, data collected from Usafiri can be exported.',
  },
  {
    id: '3',
    h4Header: 'Does Usafiri share data among organizations?',
    description: 'No, the data collected by your organization is strictly yours and is not shared with anyone.',
  },
];

export const getImage = (value) => {
  if (value === '1') {
    return working1;
  }
  if (value === '2') {
    return working2;
  }
  if (value === '3') {
    return working3;
  }
  if (value === '4') {
    return working4;
  }
  if (value === '5') {
    return working5;
  }
  if (value === '6') {
    return working6;
  }
  if (value === '7') {
    return working7;
  }
  return working6;
};
