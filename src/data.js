// src/data.js

export const CLIENTS = ['L&T Construction', 'Afcons Infrastructure', 'NHAI', 'NHSRCL', 'Gammon India', 'Tata Projects', 'Rail Vikas Nigam', 'RVNL', 'DFCCIL', 'Punj Lloyd'];

export const PROJECTS = [
  { title: 'Mumbai–Ahmedabad High-Speed Rail Bridge', client: 'National High Speed Rail Corporation', scope: 'Assembly & Erection of 100-Meter Span Open Web Girder (OWG) weighing 1,500 MT. Complex precision alignment and staged launching under live corridor conditions.', tag: 'Bullet Train', scale: '1,500 Metric Tonnes', year: '2023', location: 'Gujarat, India', image: 'https://images.unsplash.com/photo-1541888059082-9e8db807e05e?auto=format&fit=crop&q=80&w=800', color: '#009DE0' }, 
  { title: 'J&K Reasi Rail Project (USBRL)', client: 'Afcons Infrastructure', scope: 'Fabrication, continuous sandblasting, structural assembly, precision torquing, and complex girder launching across high-altitude terrain in J&K.', tag: 'Railways', scale: '₹7 Crore Value', year: '2022', location: 'Jammu & Kashmir', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800', color: '#28166F' }, 
  { title: 'Mahatma Gandhi Setu Bridge', client: 'Afcons Sibmost JV', scope: 'Heavy assembly, high-altitude girder erection, deck slab concreting, and stable liner/trestle fabrication over the Ganga river.', tag: 'Mega Bridges', scale: '₹5 Crore Value', year: '2021', location: 'Bihar, India', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800', color: '#009DE0' }, 
  { title: 'Dedicated Freight Corridor', client: 'DFCCIL / L&T Construction', scope: 'Supply, fabrication and erection of composite steel-concrete girders for the Western DFC alignment. Multi-span execution under live freight schedule.', tag: 'Freight Rail', scale: '₹12 Crore Value', year: '2020', location: 'Rajasthan, India', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800', color: '#111111' }, 
  { title: 'NH-48 Flyover Package', client: 'NHAI / Gammon India', scope: 'PSC girder erection, launching girder operations, and temporary works for a multi-span urban flyover on NH-48 in Maharashtra.', tag: 'National Highway', scale: '₹8 Crore Value', year: '2019', location: 'Maharashtra, India', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800', color: '#1A1A1A' }, 
  { title: 'Chenab Rail Bridge Auxiliary Works', client: 'Tata Projects Ltd.', scope: 'Structural fabrication of auxiliary steel components, sandblasting, metallizing and site coordination for the world-class Chenab arch bridge project.', tag: 'Icon Project', scale: '₹4 Crore Value', year: '2018', location: 'Jammu & Kashmir', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800', color: '#475569' }, 
];

export const SERVICES = [
  { id: '01', title: 'Heavy Steel Girder Erection', icon: '🏗', desc: 'Specialist execution of structural bridge girders for roads and railways — Open Web, Underslung, and Composite systems. Includes launching girder operations, tandem crane lifts, and precision alignment under live corridor constraints.', bullets: ['Open Web Girder (OWG) Bridges', 'Underslung & Composite Girders', 'Launching Girder Operations', 'Cantilever Erection Methods', 'Tandem Crane Coordination'] },
  { id: '02', title: 'Precision Bolting & Torquing', icon: '🔩', desc: 'End-to-end controlled bolting solutions across industrial and infrastructure sites. We supply, operate, and certify electric and hydraulic torque equipment with NABL-compliant calibration documentation.', bullets: ['Electric & Hydraulic Torque Wrenches', 'High-Strength Structural Bolting', 'Torque Verification & Certification', 'Shear-Type Connector Installation', 'Sales, Rental & On-Site Service'] },
  { id: '03', title: 'Industrial Metal Fabrication', icon: '⚙️', desc: 'Heavy-duty custom fabrication of industrial steel structures including pressure vessels, piping assemblies, liner plates, trestle systems, and Pre-Engineered Buildings (PEB). Executed with IS:2062 grade materials.', bullets: ['Structural Steel Assembly', 'Pressure Piping Fabrication', 'Liner & Trestle Fabrication', 'PEB Erection & Steel Sheds', 'Cement Plant Structures'] },
  { id: '04', title: 'Surface Treatment & Coating', icon: '🛡', desc: 'High-specification surface preparation and protective coating programs for steel structures exposed to harsh environments — including rail, coastal, and industrial settings.', bullets: ['Copper Slag & Sand Blasting (Sa2.5)', 'Thermal Arc Metallizing', 'Epoxy & Zinc-Rich Primer Systems', 'Industrial Topcoat Painting', 'SSPC / ISO 8501-1 Compliant'] },
  { id: '05', title: 'Civil & Structural Works', icon: '🏛', desc: 'Full-scope civil construction services including deck slab concreting, formwork, temporary works design, and site infrastructure for major bridge and rail projects across India.', bullets: ['Deck Slab Concreting', 'Formwork & Falsework', 'Temporary Trestle Structures', 'Pile Cap & Foundation Works', 'Site Infrastructure Setup'] },
  { id: '06', title: 'Manpower & Labour Supply', icon: '👷', desc: 'Deployment of trained, IS/OHSAS-compliant construction workforce for large-scale project execution. Our skilled labour pool includes riggers, welders, crane operators, and structural fitters.', bullets: ['Skilled & Semi-Skilled Workforce', 'Rigging & Crane Operators', 'Structural Welders (ASME/IS)', 'Safety-Trained Site Teams', 'Long-term Deployment Contracts'] },
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
  { id: '01', title: 'Heavy Steel Girder Erection', desc: 'Specialist in structural Road & Rail bridges — OWG, Underslung, and Composite systems with precision launching.' },
  { id: '02', title: 'Precision Bolting & Torquing', desc: 'Certified hydraulic and electric torque solutions, calibration services, equipment sales and rental.' },
  { id: '03', title: 'Industrial Metal Fabrication', desc: 'Heavy-duty steel structures, pressure pipelines, liner plates, trestle systems, and PEB erection.' },
  { id: '04', title: 'Surface Treatment & Coating', desc: 'High-spec copper slag blasting, thermal metallizing, and multi-coat industrial painting programs.' },
];