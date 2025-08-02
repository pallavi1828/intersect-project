import React from 'react';
import '../styles/Customers.css';

const Customers = () => {
  const bannerImage = process.env.PUBLIC_URL + '/images/clients-banner.jpg';

  const governmentClients = [
    "Abdul Nazir Sab State Institute for Rural Development – Mysore",
    "Administrative Training Institute – Mysore",
    "Bharat Heavy Electricals Limited (BHEL) – Bengaluru",
    "Bharat Sanchar Nigam Limited (BSNL) – Bengaluru",
    "Criminal Investigation Department (CID) – Karnataka Police",
    "Directorate of Urban Land Transport – Bengaluru",
    "Karnataka Milk Federation (KMF) – Bengaluru",
    "Karnataka State Medical Supplies Corporation Limited",
    "Master Control Facility – Hassan",
    "State Institute for Urban Development – Mysore",
    "Suvarna Arogya Suraksha Trust (SAST)",
    "Zilla Panchayat Kalaburagi- Kalaburagi ",
    "Zilla Panchayat Raichur- Raichur",
    "Zilla Panchayat Yadgiri- Yadgiri",
  ].sort();

  const educationUniversities = [
    "Adichunchanagiri University – Bellur Cross, Mandya District",
    "Bengaluru Central University – Bengaluru",
    "Bengaluru University – Bengaluru",
    "Central University of Karnataka – Kalaburagi",
    "Christ University – Bengaluru",
    "Dayananda Sagar University – Bengaluru",
    "Dr. B. R. Ambedkar School of Economics University – Bengaluru",
    "Indian Institute of Information Technology – Dharwad",
    "Indian Institute of Information Technology – Raichur",
    "Indian Statistical Institute – Bengaluru",
    "Karnataka State Open University – Ballari",
    "Kuvempu University – Shivamogga",
    "National Institute of Fashion Technology – Bengaluru",
    "National Law School of India University – Bengaluru",
    "PES University – Bengaluru",
    "Rajiv Gandhi University of Health Sciences – Bengaluru",
    "St. Joseph’s University – Bengaluru",
    "University of Agricultural Sciences – Hassan"
  ].sort();

  const engineeringColleges = [
    "BGS College of Engineering and Technology – Bengaluru",
    "BGS Institute of Technology – Bellur Cross, Mandya District",
    "Bheemanna Khandre Institute of Technology – Bhalki, Bidar District",
    "Gopalan College of Engineering and Management – Bengaluru",
    "Gopalan International School – Bengaluru",
    "Gopalan National School – Bengaluru",
    "JSS Academy of Technical Education – Bengaluru",
    "Kandula Lakshumma Memorial College of Engineering for Women – Kadapa",
    "KSRM College of Engineering – Kadapa",
    "M. S. Engineering College – Bengaluru",
    "Nagarjuna College of Engineering & Technology – Devanahalli",
    "New Horizon College of Engineering – Bengaluru",
    "Nitte Meenakshi Institute of Technology – Bengaluru",
    "PES Institute of Technology & Management – Shivamogga",
    "RL Jallappa Institute of Technology – Doddaballapura",
    "Shri Vithal Education & Research Institute – Pandharpur, Solapur District",
    "SKN Sinhgad College of Engineering – Pandharpur, Solapur District",
    "Sri Venkateshwara College of Engineering – Bengaluru",
    "St. Joseph's Boys' High School – Bengaluru",
    "St. Joseph’s College of Commerce  – Bengaluru",
    "St. Joseph’s College of Law – Bengaluru",
    "St. Joseph's Convent Girls High School – Bengaluru",
    

  ].sort(); 

  const bankingFinanceClients = [
  "Adarsha Credit Co-Operative Society - Bagalkot",
  "Akki Alur Urban Co Operative Bank - Haveri",
  "Bagalkot Urban Co-Op Bank Ltd - Bagalkot",
  "Basaveshwara Sahakara Bank Niyamitha - Jamakhandi Bagalkot Dist",
  "Cardamom Merchants Co-Operative Bank Limited - Haveri",
  "Chartered Sahakari Bank Niyamitha - Bengaluru",
  "Comptrollers Office Cooperative Bank Ltd - Bengaluru",
  "Davangere Harihara Urban Sahakara Bank Niyamitha - Davanagere",
  "Deccan Urban Co-Operative Bank Ltd - Bijapur",
  "Graduate Co-Operative Credit Society - Bengaluru",
  "Graduates Cooperative Bank Ltd - Mysore",
  "Haveri Urban Co-Operative Bank Limited - Haveri",
  "Jamakhandi Urban Co-Operative Bank Limited - Jamakhandi",
  "Kalidas Co-Operative Credit Society Limited - Kamatgi Bagalkot Dist",
  "Karnataka Mahila Sahakara Bank Niyamitha - Chikkamagalur",
  "Krishna Bhīma Samrudhi Local Area Bank - Hyderabad",
  "KSRTC Employees Credit Co-Society - Bengaluru",
  "Lakshmi Sahakari Bank Niyamitha - Guledagudda, Bagalkot Dist",
  "Mahalingpur Urban Cooperative Bank Ltd - Mahalingpur, Bagalkot Dist",
  "Mandya City Cooperative Bank - Mandya",
  "Manvi Pattana Souharda Sahakari Bank Niyamita - Manvi, Raichur Dist",
  "Merchants Cooperative Bank – Tiptur, Tumkur Dist",
  "Merchants Souharda Sahakara Bank Niyamitha - Chitradurga",
  "Mico Employees Co-operative Society Limited - Bengaluru",
  "Millath Co Operative Bank Ltd - Davanagere",
  "Minority Credit Co Operative Society Ltd - Bagalkot",
  "Muslim Co-Operative Bank Ltd - Mysore",
  "National Minority Co-Operative Society Ltd - Badami, Bagalkot Dist",
  "Parshwanatha Sahakara Bank Niyamitha - Tumkur",
  "Saleshwara Credit Co-Op Society - Guledagudda, Bagalkot Dist",
  "Sanghamitra Rural Financial Services - Bengaluru",
  "Sarakari Naukarara Sahakari Bank Niyamit - Vijayapura",
  "Schneider Electric India Private Limited (L&T) - Mysore",
  "Shri Basaveshwar Sahakari Bank Niyamit - Bagalkot",
  "Shri Kadasiddeshwar Pattan Sahakari Bank Niyamit - Banahatti, Bagalkot Dist",
  "Shri Parvati Parameshwar Co-Op Credit Society Ltd – Kamatgi",
  "Shri Shivayogi Murughendra Swami Urban Co-operative Bank Ltd - Athani",
  "Shri Siddheshwar Co Operative Bank - Vijayapura",
  "Shri Vasavamba Co-Operative Bank Ltd - Holenarasipura",
  "Shri Sharada Mahila Co-Operative Bank Limited - Tumkur",
  "Shushruti Souharda Sahakara Bank Niyamitha - Bengaluru",
  "Siddaganga Urban Co Operative Bank - Tumkur",
  "Sri Sudha Co-operative Bank Ltd - Bengaluru",
  "Sri Vasavi Vividhodhesha Souhardha Co-Op Ltd - Kunigal",
  "Textile Manufacturers Co-Op Bank Limited - Doddaballapur",
  "Tumkur Veerashaiva Co Operative Bank - Tumkur",
  "Yeshwathpur Credit Co-Op Society - Bengaluru"
].sort();

const corporateClients = [
  "Adani Green Energy Limited - Ahmedabad",
  "Amara Raja Group of Companies - Tirupathi",
  "Asianet Suvarna News",
  "Asia Net News Network Private Limited (Suvarna News) - Bangalore",
  "Atria Power Corp Corporation - Bangalore",
  "Avio Helitronics Info Systems Private Limited - Bangalore",
  "Bharat Fritz Werner Ltd. - Bengaluru",
  "DS-MAX Properties Private Limited - Bangalore",
  "Embassy Property Developments Private Limited - Bengaluru",
  "Finance Buddha - Bengaluru",
  "Geodesic Techniques Private Limited - Bangalore",
  "Gogga Gurusanthiah & Bros - Hospet",
  "Gokul Dairy Products - Kunigal",
  "Green Agro Pack Private Limited - Davanagere",
  "International Aerospace Manufacturing Pvt. Ltd. - Bengaluru",
  "Jansi Kia Car Showroom - Shimoga",
  "Kalyani Steels Limited - Hospet",
  "Kannada Prabha",
  "Kanva Group of Company - Bangalore",
  "Keihin Fie Pvt Ltd - Doddaballapur",
  "Kosan Crisplant - Kunigal",
  "Mineral Enterprises Limited - Chitradurga",
  "Nandi Sahakari Sakkare Karkhane Niyamit - Vijayapura",
  "PV Line Private Limited - Sira",
  "Pulse Secure India Private Limited - Bangalore",
  "Red Seer Management Consulting Pvt Ltd - Bangalore",
  "Reitzel India Pvt Limited - Kunigal",
  "Reverend Technologies Pvt. Ltd - Bangalore",
  "Reverie Language Technologies Limited - Bangalore",
  "Royal Orchid Central - Shimoga",
  "Samparka Info Media Private Limited (PrajaTV) - Bangalore",
  "Sami Labs Limited - Bangalore",
  "Schneider Electric India Private Limited (L&T) - Mysore",
  "Shiva-athene Technologies Private Limited - Bengaluru",
  "Sogefi Group - Bengaluru",
  "SLR Metaliks Limited - Hospet",
  "SunBiz Solutions - Bengaluru",
  "Syscon Instruments Private Limited - Bengaluru",
  "Tata Power Solar - Bengaluru",
  "Vedanta Limited (Sesa Goa) – Chitradurga",
  "Venkateshwara Hatcheries Private Limited - Bengaluru",
  "Vindhya e-Infomedia Private Limited - Bengaluru",
  "Vishwakshara Media Pvt Ltd - Bengaluru",
  "VLSICHIP Technologies - Bengaluru",
  "Zest Money (Camden Town Technologies Pvt Ltd) - Bengaluru"
].sort();

return (
  <div>
    <div className="customers-page">
      <div className="clients-banner">
        <img src={bannerImage} alt="Our Clients Banner" />
      </div>

      <h1>Our Esteemed Clients</h1>

      <section className="customer-section">
        <h2>Government Sector</h2>
        <ul className="customer-list two-column">
          {governmentClients.map((client, index) => (
            <li key={index}>{client}</li>
          ))}
        </ul>
      </section>

      <section className="customer-section">
        <h2>Education Universities</h2>
        <ul className="customer-list two-column">
          {educationUniversities.map((university, index) => (
            <li key={index}>{university}</li>
          ))}
        </ul>
      </section>

      <section className="customer-section">
        <h2>Educational Institutions – Engineering Colleges & Schools</h2>
        <ul className="customer-list two-column">
          {engineeringColleges.map((college, index) => (
            <li key={index}>{college}</li>
          ))}
        </ul>
      </section>
    </div>
    <section className="customer-section">
      <h2>Banking & Finance Sector</h2>
      <div className="customer-box">
        <ul className="customer-list two-column">
          {bankingFinanceClients.map((client, index) => (
            <li key={index}>{client}</li>
          ))}
        </ul>
      </div>
    </section>

    <section className="customer-section">
      <h2>Corporate Customers</h2>
      <div className="customer-box">
        <ul className="customer-list two-column">
          {corporateClients.map((client, index) => (
            <li key={index}>{client}</li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);
};

export default Customers;
