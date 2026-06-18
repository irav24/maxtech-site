// src/data.js
import bltrn from './assets/project/bullet-train.jpeg';
import mgsetu from './assets/project/mgsetu.jpg';
import jk from './assets/project/usbrl.jpg';
import { Wrench, Settings, Zap, HardHat, Building2, Ruler, PaintBucket } from 'lucide-react';


export const CLIENTS = ['L&T Construction', 'Afcons Infrastructure', 'NHAI', 'NHSRCL', 'Gammon India', 'Tata Projects', 'Rail Vikas Nigam', 'RVNL', 'DFCCIL', 'Punj Lloyd'];

export const PROJECTS = [
  { title: 'Mumbai–Ahmedabad High-Speed Rail Bridge', status: 'Ongoing', client: 'National High Speed Rail Corporation', scope: 'Assembly & Erection of 100-Meter Span Open Web Girder (OWG) weighing 1,500 MT. Complex precision alignment and staged launching under live corridor conditions.', tag: 'Bullet Train', scale: '1,500 Metric Tonnes', year: '2023', location: 'Gujarat, India', image: bltrn, color: '#0D1B3E' },
  { title: 'J&K Reasi Rail Project (USBRL)', status: 'Ongoing', client: 'Afcons Infrastructure', scope: 'Fabrication, continuous sandblasting, structural assembly, precision torquing, and complex girder launching across high-altitude terrain in J&K.', tag: 'Railways', scale: '₹7 Crore Value', year: '2022', location: 'Jammu & Kashmir', image: jk, color: '#0D1B3E' },
  { title: 'Mahatma Gandhi Setu Bridge', status: 'Completed', client: 'Afcons Sibmost JV', scope: 'Heavy assembly, high-altitude girder erection, deck slab concreting, and stable liner/trestle fabrication over the Ganga river.', tag: 'Mega Bridges', scale: '₹5 Crore Value', year: '2021', location: 'Bihar, India', image: mgsetu, color: '#0EA5E9' },
  { title: 'Dedicated Freight Corridor', status: 'Completed', client: 'DFCCIL / L&T Construction', scope: 'Supply, fabrication and erection of composite steel-concrete girders for the Western DFC alignment. Multi-span execution under live freight schedule.', tag: 'Freight Rail', scale: '₹12 Crore Value', year: '2020', location: 'Rajasthan, India', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800', color: '#334155' },
  { title: 'NH-48 Flyover Package', status: 'Completed', client: 'NHAI / Gammon India', scope: 'PSC girder erection, launching girder operations, and temporary works for a multi-span urban flyover on NH-48 in Maharashtra.', tag: 'National Highway', scale: '₹8 Crore Value', year: '2019', location: 'Maharashtra, India', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800', color: '#0B1530' },
  { title: 'Chenab Rail Bridge Auxiliary Works', status: 'Completed', client: 'Tata Projects Ltd.', scope: 'Structural fabrication of auxiliary steel components, sandblasting, metallizing and site coordination for the world-class Chenab arch bridge project.', tag: 'Icon Project', scale: '₹4 Crore Value', year: '2018', location: 'Jammu & Kashmir', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800', color: '#475569' },
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
  }
];

export const PRODUCTS = [
  { name: 'Maxtech Shear Wrench', cat: 'Torque Tools', desc: 'Purpose-built for high-strength TC bolt installation in structural steel connections. Delivers precise shear-type controlled torque.', img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=600' },
  { name: 'Digital Electric Torque Wrench (TL-Type)', cat: 'Electric Series', desc: 'High-precision digital readout torque wrench for controlled tightening in bridges and industrial facilities. Adjustable torque range.', img: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=600' },
  { name: 'Digital Electric Torque Wrench (TN-Type)', cat: 'Electric Series', desc: 'Compact form-factor electric wrench suited for confined spaces. Inline torque setting with digital confirmation and audit trail.', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600' },
  { name: 'Cordless Battery Torque Wrench', cat: 'Battery Series', desc: 'Freedom of movement without power cables. Ideal for field operations where power infrastructure is unavailable.', img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600' },
  { name: 'Electric Hydraulic Torque Pump', cat: 'Hydraulic Series', desc: 'High-flow hydraulic power unit for driving square-drive or hex-type hydraulic torque wrenches in heavy industrial applications.', img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=600' },
  { name: 'Hydraulic Torque Wrench (Square Drive)', cat: 'Hydraulic Series', desc: 'Interchangeable square-drive cassettes for wide bolt-size coverage. Used in structural, petrochemical, and power plant applications.', img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=600' },
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