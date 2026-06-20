// src/data.js
import bltrn from './assets/project/bullet-train3.jpeg';
import bltrn2 from './assets/project/bullet-train2.jpeg';
import bltrn3 from './assets/project/bullet-train4.jpeg';
import mgsetu from './assets/project/mgsetu.jpg';
import mgSetu1 from './assets/project/mg-setu1.jpg';
import mgSetu2 from './assets/project/mg-setu2.jpg';
import mgSetu3 from './assets/project/mg-setu3.jpg';
import mgSetu4 from './assets/project/mg-setu4.jpg';
import mgSetu5 from './assets/project/mg-setu5.jpg';
import mgSetu7 from './assets/project/mg-setu7.jpg';
import mgSetu8 from './assets/project/mg-setu8.jpg';
import mgSetu9 from './assets/project/mg-setu9.jpg';
import jk from './assets/project/usbrl.jpg';
import usbrl2 from './assets/project/usbrl2.jpg';
import usbrl3 from './assets/project/usbrl3.jpg';
import usbrl4 from './assets/project/usbrl4.jpg';
import usbrl5 from './assets/project/usbrl5.jpg';
import usbrl6 from './assets/project/usbrl6.jpg';
import usbrl7 from './assets/project/usbrl7.jpeg';
import wdfcc15a from './assets/project/wdfcc15a.jpg';
import wdfcc15a1 from './assets/project/wdfcc15a1.jpg';
import wdfcc15a2 from './assets/project/wdfcc15a2.jpg';
import wdfcc15a3 from './assets/project/wdfcc15a3.jpg';
import wdfcc15a4 from './assets/project/wdfcc15a4.jpg';
import wdfcc15a5 from './assets/project/wdfcc15a5.jpg';
import wdfcc15b from './assets/project/wdfcc15b.jpg';
import wdfcc15b1 from './assets/project/wdfcc15b1.jpg';
import wdfcc15b2 from './assets/project/wdfcc15b2.jpg';
import wdfcc15b3 from './assets/project/wdfcc15b3.jpg';
import wdfcc15b4 from './assets/project/wdfcc15b4.jpg';
import shearwrench from './assets/product/shearwrench.jpg'
import tltype from './assets/product/TL-Type.jpg'
import tntype from './assets/product/TN-Type.jpg'
import cordlesswrench from './assets/product/cordlesswrench.jpg'
import hydraulicwrenchpump from './assets/product/hydraulicwrenchpump.jpg'
import squaredrive from './assets/product/squaredrive.jpg'
import hexdrive from './assets/product/hexdrive.jpg'
import electrictorquewrench from './assets/product/electrictorquewrench.png'
import lithium from './assets/product/lithium.jpeg'
import { Wrench, Settings, Zap, HardHat, Building2, Ruler, PaintBucket, ShieldCheck } from 'lucide-react';
import dec1 from './assets/product/dec.jpg'
import dec2 from './assets/product/dec.jpg'

import etwc from './assets/product/etwc.jpg'
import hexc from './assets/product/hexc.jpg'
import sdtwc from './assets/product/sdtwc.jpg'
import swc from './assets/product/swc.jpg'


export const CLIENTS = ['L&T Construction', 'Afcons Infrastructure', 'NHAI', 'NHSRCL', 'Gammon India', 'Tata Projects', 'Rail Vikas Nigam', 'RVNL', 'DFCCIL', 'Punj Lloyd'];

export const PROJECTS = [
  { id:'1',title: 'Mumbai–Ahmedabad High-Speed Rail Bridge', status: 'Completed', client: 'National High Speed Rail Corporation', scope: 'Assembly & Erection of 100-Meter Span Open Web Girder (OWG) weighing 1,500 MT. Complex precision alignment and staged launching under live corridor conditions.', tag: 'Bullet Train', scale: '1,500 Metric Tonnes', year: '2023', location: 'Gujarat, India', image: bltrn, color: '#0D1B3E',gallery: [bltrn, bltrn2,bltrn3] },
   {
    id: '2',
    title: 'J&K Reasi Rail Project (USBRL)',
    status: 'Completed',
    client: 'Afcons Infrastructure',
    scope: 'Fabrication, continuous sandblasting, structural assembly, precision torquing, and complex girder launching across high-altitude terrain in J&K.',
    tag: 'RAILWAYS',
    scale: '₹7 Crore Value',
    year: '2022',
    location: 'Jammu & Kashmir',
    color: '#0F172A',
    image: jk, 
    // This array will automatically trigger the image carousel on the details page!
    gallery: [jk, usbrl2, usbrl3, usbrl4, usbrl5, usbrl6, usbrl7] 
  },
  { id:'3',title: 'Mahatma Gandhi Setu Bridge', status: 'Completed', client: 'Afcons Sibmost JV', scope: 'Heavy assembly, high-altitude girder erection, deck slab concreting, and stable liner/trestle fabrication over the Ganga river.', tag: 'Mega Bridges', scale: '₹5 Crore Value', year: '2021', location: 'Bihar, India', image: mgsetu, color: '#0EA5E9',gallery: [
      mgsetu, 
      mgSetu1, 
      mgSetu2, 
      mgSetu3, 
      mgSetu4, 
      mgSetu5, 
      mgSetu7, 
      mgSetu8, 
      mgSetu9
    ] },
  {
    id:'4',
    title: 'WDFCC 15A Project',
    status: 'Completed',
    client: 'L&T Construction Ltd.',
    scope: 'Assembly, Erection, Torquing & Painting.',
    tag: 'RAILWAYS',
    scale: '₹2.5 Crore Approx.',
    year: '2021 - 2022',
    location: 'Maharashtra',
    color: '#0F172A',
     image:wdfcc15a,
    gallery: [
      wdfcc15a, 
      wdfcc15a1, 
      wdfcc15a2, 
      wdfcc15a3, 
      wdfcc15a4, 
      wdfcc15a5
    ]// ⚠️ Import placeholder
  },
  {
    id:'5',
    title: 'WDFCC 15B Project',
    status: 'Completed',
    client: 'L&T Construction Ltd.',
    scope: 'Assembly, Erection, Torquing & Painting.',
    tag: 'RAILWAYS',
    scale: '₹90 Lacs Approx.',
    year: '2022 - 2023',
    location: 'Gujarat',
    color: '#0F172A',
    image: wdfcc15b,
    gallery: [
      wdfcc15b, 
      wdfcc15b1, 
      wdfcc15b2, 
      wdfcc15b3, 
      wdfcc15b4
    ]
     // ⚠️ Import placeholder
  },
  {id:'6',
    title: 'New Defence Shop Project',
    
    status: 'Ongoing', // This creates the orange tag at the top right
   
    client: 'L&T Construction Ltd.',
    
    scope: 'Fabrication, continuous sandblasting, painting, and erection of Defence Shed Structure.',
    tag: 'DEFENCE', // This will show up in the dark blue tag at the top left
    scale: '₹2 Crore Value',
    year: '2023 - 2024',
    
    location: 'Hazira, Gujarat',
     // You will need to import an image for this at the top of your file!
  },
  { id:'7',
     // Adjust ID numbering as needed
    title: 'Bangalore Metro Rail Corporation Ltd',
    status: 'Completed', // Or 'Ongoing' depending on current site status
    client: 'Afcons Infrastructure Ltd.',
    scope: 'Assembly, Erection & Torquing of Composite Girder.',
    tag: 'METRO',
    scale: '₹30 Lacs', // Formatted for your UI
    year: '2023 - 2024',
    location: 'Karnataka',
    color: '#009DE0', // Optional: Adds the specific color to the top-left tag
     // ⚠️ Don't forget to import this image at the top of your file!
  },
  {
    id:'8',
    title: 'Grasim Paint Plant',
    status: 'Ongoing',
    client: 'L&T Construction Ltd.',
    scope: 'Fabrication & Erection of Structures.',
    tag: 'INDUSTRIAL',
    scale: 'In Process', 
    year: '2023 - 2024',
    location: 'Cheyyar, Tamil Nadu',
    color: '#0F172A',
     // ⚠️ Import placeholder
  },
  {id:'9',
    title: 'Reliance PV Manufacturing Facility',
    status: 'Ongoing',
    client: 'L&T Construction Ltd.',
    scope: 'Precast Erection Works.',
    tag: 'MANUFACTURING',
    scale: 'In Process',
    year: '2023 - 2024',
    location: 'Jamnagar, Gujarat',
    color: '#0F172A',
    // ⚠️ Import placeholder
  },
  {
    id:'10',
    title: 'Ultratech Cement Plant',
    status: 'Completed', // Or 'Ongoing' if still active
    client: 'L&T Construction Ltd.',
    scope: 'Fabrication, Painting & Erection of Cement Plant Structure.',
    tag: 'INDUSTRIAL',
    scale: '₹1.2 Crore', // Formatted for your UI
    year: '2022 - 2024',
    location: 'Pali, Rajasthan',
    color: '#0F172A',
    // ⚠️ Import placeholder
  },
  
  {id:'11',
    title: 'JSW Shiva Cement Plant',
    status: 'Completed',
    client: 'L&T Construction Ltd.',
    scope: 'Fabrication & Erection of Cement Plant Structure.',
    tag: 'INDUSTRIAL',
    scale: '₹30 Lacs',
    year: '2022 - 2023',
    location: 'Rourkela, Odisha',
    color: '#0F172A',
    // ⚠️ Import placeholder
  },
  {
    id:'12',
    title: 'Gujarat Metro Rail Corporation Ltd',
    status: 'Completed',
    client: 'Dilip Buildcon Ltd.',
    scope: 'Fabrication of Barricading Board & Painting works.',
    tag: 'METRO',
    scale: '₹20 Lacs',
    year: '2022 - 2023',
    location: 'Gujarat',
    color: '#009DE0',
    // ⚠️ Import placeholder
  },
  {
    id:'13',
    title: 'Steel Plant',
    status: 'Completed',
    client: 'L&T Construction Ltd.',
    scope: 'Fabrication Works',
    tag: 'INDUSTRIAL',
    scale: '₹70 Lacs',
    year: '2022 - 2023',
    location: 'Angul, Odisha',
    color: '#0F172A',
     // ⚠️ Import placeholder
  },
  { id:'14',
    title: 'NCRTC RRTS PKG 8',
    status: 'Completed',
    client: 'Afcons Infrastructure Ltd.',
    scope: 'Fabrication works.',
    tag: 'RAILWAYS',
    scale: '₹20 Lacs',
    year: '2022 - 2023',
    location: 'Meerut, U.P.',
    color: '#0F172A',
    // ⚠️ Import placeholder
  },
  {
    id:'15',
    title: 'NCRTC RRTS PKG 6',
    status: 'Completed',
    client: 'Afcons Infrastructure Ltd.',
    scope: 'Fabrication works.',
    tag: 'RAILWAYS',
    scale: '₹1.5 Crore',
    year: '2022 - 2023',
    location: 'Delhi',
    color: '#0F172A',
    // ⚠️ Import placeholder
  },
  
  
  
  
];



export const SERVICES = [
  {
    id: '01',
    icon: <HardHat size={40} color="#009DE0" />,
    title: 'Fabrication of Steel Structures or Piping In any industries.',
    desc: 'We are a team of skilled metal fabricators who are passionate about creating exceptional products for our clients. We specialize in a wide range of metal fabrication services, utilizing our expertise, state-of-the-art equipment, and innovative techniques to deliver outstanding results.'
  },
  {
    id: '02',
    icon: <Ruler size={40} color="#009DE0" />,
    title: 'Erection of Steel Girders',
    desc: 'Specialist in Erection of Steel Girders of Structural Bridge of Roads, Railways (OWG, Underslung, Composite Girders)'
  },
  {
    id: '03',
    icon: <Building2 size={40} color="#009DE0" />,
    title: 'Erection of PEB Structure',
    desc: 'Erection of pre-engineered buildings and steel structure is the last step in our building process that all the components from the previous steps come together.'
  },
  {
    id: '04',
    icon: <Settings size={40} color="#009DE0" />,
    title: 'Civil Projects',
    desc: 'Civil works are any construction developed by civilians (engineers, architects, builders, etc.) to be used for civilian purposes — that is, by the population of a city, region, or country.'
  },
  {
    id: '05',
    icon: <Wrench size={40} color="#009DE0" />,
    title: 'Bolting & Torquing Solution.',
    desc: 'We deliver all types of Bolting, Tensioning & Torquing Solution in any Industries.'
  },
  {
    id: '06',
    icon: <Zap size={40} color="#009DE0" />,
    title: 'Sales, Services & Rentals of Torquing Machines.',
    desc: 'We deal in Sales of Torquing Machineries, on site services of Bolting & Torquing in any Industry and Rentals of Torque wrenches such as Electric Torque Wrench, Hydraulic Torque Wrench, Powerpacks and Sockets.'
  },
  {
    id: '07',
    icon: <PaintBucket size={40} color="#009DE0" />,
    title: 'Sand-Blasting, Metallizing & Painting',
    desc: 'We do all types of sand/copper slag Blasting, Metallizing and surface coating jobs for any industries.'
  },
  {
    id: '08',
    icon: <ShieldCheck size={40} color="#009DE0" />,
    title: 'Hot Dip Galvanisation',
    desc: 'We do all types of Hot-Dip Galvanising(HDG) of structures.'
  }
];

export const PRODUCTS = [
  { 
    id:'01',
    name: 'Electric Shear Wrench', 
    cat: 'Torque Tools', 
    desc: 'Purpose-built for high-strength TC bolt installation in structural steel connections. Delivers precise shear-type controlled torque.', 
    img: shearwrench,// Using a local gallery image as a placeholder
    catalogImg:swc,
  },
  { id:'02',
    name: 'Electric Torque Wrench', 
    cat: 'Torque Tools', 
    desc: 'Purpose-built for high-strength TC bolt installation in structural steel connections. Delivers precise shear-type controlled torque.', 
    img: electrictorquewrench,
    catalogImg:etwc
  },
  { id:'03',
    name: 'Digital Electric Torque Wrench (TL-Type)', 
    cat: 'Electric Series', 
    desc: 'High-precision digital readout torque wrench for controlled tightening in bridges and industrial facilities. Adjustable torque range.', 
    img: tltype,
    catalogImg:dec1
  },
  { id:'04',
    name: 'Digital Electric Torque Wrench (TN-Type)', 
    cat: 'Electric Series', 
    desc: 'Compact form-factor electric wrench suited for confined spaces. Inline torque setting with digital confirmation and audit trail.', 
    img: tntype,
    catalogImg:dec2
  },
 
   { id:'05',
    name: 'Lithium Battery Torque Wrench', 
    cat: 'Battery Series', 
    desc: 'Freedom of movement without power cables. Ideal for field operations where power infrastructure is unavailable.', 
    img: lithium,

  },
  { id:'06',
    name: 'Electric Hydraulic Torque Pump', 
    cat: 'Hydraulic Series', 
    desc: 'High-flow hydraulic power unit for driving square-drive or hex-type hydraulic torque wrenches in heavy industrial applications.', 
    img: hydraulicwrenchpump
  },
  { id:'07',
    name: 'Hydraulic Torque Wrench Tool (Hex Drive)', 
    cat: 'Hydraulic Series', 
    desc: 'Heavy Duty bolting tool designed to deliver precise, high torque in confined spaces.', 
    img: hexdrive,
    catalogImg:hexc
  },
  { id:'08',
    name: 'Hydraulic Torque Wrench Tool (Square Drive)', 
    cat: 'Hydraulic Series', 
    desc: 'Interchangeable square-drive cassettes for wide bolt-size coverage. Used in structural, petrochemical, and power plant applications.', 
    img: squaredrive
  },
];

export const STATS = [
  { label: 'Years of Execution', value: '28+' },
  { label: 'Completed Projects', value: '73+' },
  { label: 'Workforce On-Site', value: '500+' },
  { label: 'Strategic Partners', value: '51+' },
];

export const CORE_CAPS = [
  {
    id: '01',
    title: 'Fabrication of Steel Structures or Piping In any industries.',
    desc: 'Precision metal fabrication and piping solutions utilizing state-of-the-art equipment to deliver exceptional results across all industrial sectors.'
  },
  {
    id: '02',
    title: 'Erection of Steel Girders',
    desc: 'Expert erection of structural steel girders for road and railway bridges, including OWG, underslung, and composite systems.'
  },
  {
    id: '03',
    title: 'Erection of PEB Structure',
    desc: 'Seamless assembly and erection of pre-engineered buildings (PEB) and steel frameworks, ensuring structural integrity and precise alignment.'
  },
  {
    id: '04',
    title: 'Civil Projects',
    desc: 'Comprehensive civil engineering and construction services dedicated to developing robust public and private infrastructure for regional growth.'
  }
];