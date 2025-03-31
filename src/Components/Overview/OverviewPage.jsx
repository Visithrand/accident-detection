import React, { useState , useEffect , useRef} from 'react';
// import img from '../../../public/Asserts/logo.png';
import './Overview.css';
import IncidentMap from '../Map/IncidentMap';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const videoData = [
    {
        id: 1,
        src: "../Asserts/10.mp4",
        title: "Camera 1",
        location: "Main Street, NY",
        policeStation: { name: "NYC Police Dept", contact: "911" },
        hospital: { name: "NYC General Hospital", contact: "+1 212-555-1234" },
        ambulance: "+1 800-AMBULANCE",
        impactRating: Math.floor(Math.random() * 10) + 1,
      },
      {
        id: 2,
        src: "../Asserts/2.mp4",
        title: "Camera 2",
        location: "Broadway Avenue, NY",
        policeStation: { name: "Broadway PD", contact: "911" },
        hospital: { name: "Broadway Medical Center", contact: "+1 212-555-5678" },
        ambulance: "+1 800-EMERGENCY",
        impactRating: Math.floor(Math.random() * 10) + 1,
      },
      {
        id: 3,
        src: "../Asserts/3.mp4",
        title: "Camera 3",
        location: "Central Park, NY",
        policeStation: { name: "Central Park Precinct", contact: "911" },
        hospital: { name: "Parkside Hospital", contact: "+1 212-555-7890" },
        ambulance: "+1 800-HELP-NOW",
        impactRating: Math.floor(Math.random() * 10) + 1,
      },
      {
        id: 4,
        src: "../Asserts/4.mp4",
        title: "Camera 4",
        location: "Times Square, Coimbatore",
        policeStation: { name: "Times Square PD", contact: "911" },
        hospital: { name: "Times Square Medical", contact: "+1 212-555-2222" },
        ambulance: "+1 800-FAST-AID",
        impactRating: Math.floor(Math.random() * 10) + 1,
      },
      {
        id: 5,
        src: "../Asserts/5.mp4",
        title: "Camera 4",
        location: "Times Square, NY",
        policeStation: { name: "Times Square PD", contact: "911" },
        hospital: { name: "Times Square Medical", contact: "+1 212-555-2222" },
        ambulance: "+1 800-FAST-AID",
        impactRating: Math.floor(Math.random() * 10) + 1,
      },
      {
        id: 6,
        src: "../Asserts/6.mp4",
        title: "Camera 4",
        location: "Times Square, NY",
        policeStation: { name: "Times Square PD", contact: "911" },
        hospital: { name: "Times Square Medical", contact: "+1 212-555-2222" },
        ambulance: "+1 800-FAST-AID",
        impactRating: Math.floor(Math.random() * 10) + 1,
      },
     
      {
        id: 7,
        src: "../Asserts/7.mp4",
        title: "Camera 4",
        location: "Times Square, NY",
        policeStation: { name: "Times Square PD", contact: "911" },
        hospital: { name: "Times Square Medical", contact: "+1 212-555-2222" },
        ambulance: "+1 800-FAST-AID",
        impactRating: Math.floor(Math.random() * 10) + 1,
      },
     
      {
        id: 8,
        src: "../Asserts/8.mp4",
        title: "Camera 4",
        location: "Times Square, NY",
        policeStation: { name: "Times Square PD", contact: "911" },
        hospital: { name: "Times Square Medical", contact: "+1 212-555-2222" },
        ambulance: "+1 800-FAST-AID",
        impactRating: Math.floor(Math.random() * 10) + 1,
      },
     
      {
        id: 9,
        src: "../Asserts/9.mp4",
        title: "Camera 4",
        location: "Times Square, NY",
        policeStation: { name: "Times Square PD", contact: "911" },
        hospital: { name: "Times Square Medical", contact: "+1 212-555-2222" },
        ambulance: "+1 800-FAST-AID",
        impactRating: Math.floor(Math.random() * 10) + 1,
      },
];

const OverviewPage = () => {
    const [popupVideo, setPopupVideo] = useState(null);
      const videoRef = useRef(null);
    
      // Automatically open the 4th video after 8 seconds
      useEffect(() => {
        const timer = setTimeout(() => {
          setPopupVideo(videoData[3]); // Open 4th video (index 3)
        }, 6000);
    
        return () => clearTimeout(timer);
      }, []);
    
      // Ensure the popup video plays automatically
      useEffect(() => {
        if (popupVideo && videoRef.current) {
          videoRef.current.muted = true; // Mute to comply with autoplay restrictions
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => console.log("Autoplay started"))
              .catch((error) => console.log("Autoplay blocked:", error));
          }
        }
      }, [popupVideo]);
    // Dummy Data for Pie Chart (Accident Severity)
    const severityData = [
        { name: 'High', value: 40 },
        { name: 'Medium', value: 35 },
        { name: 'Low', value: 25 },
    ];

    //const COLORS = ['#FF0000', '#FFA500', '#32CD32']; // Red, Orange, Green

    // Dummy Data for Bar Chart (Monthly Accidents)
    const monthlyAccidents = [
        { month: 'Jan', accidents: 50 },
        { month: 'Feb', accidents: 80 },
        { month: 'Mar', accidents: 45 },
        { month: 'Apr', accidents: 70 },
        { month: 'May', accidents: 90 },
        { month: 'Jun', accidents: 55 },
        { month: 'Jul', accidents: 65 },
        { month: 'Aug', accidents: 75 },
        { month: 'Sep', accidents: 60 },
        { month: 'Oct', accidents: 85 },
        { month: 'Nov', accidents: 95 },
        { month: 'Dec', accidents: 100 },
    ];

    return (
        <div className="dashboard">
            <header className="header">
            {/* <img src="img" alt="Logo" className="logo" /> */}
            <img src="/Asserts/logo.png" alt="Logo" className="logo" />
            
                <h1>Accident Detection Dashboard</h1>
                <div className="user-profile">
                    <span>Admin</span>
                    <i className="fa-solid fa-user"></i>
                </div>
            </header>

            <div className="main-content">
                <div className="sidebar">
                    <ul>
                        <li className="active" onClick={() => document.querySelector(".o").scrollIntoView({ behavior: "smooth" })}>Overview</li>
                        <li onClick={() => document.querySelector(".q").scrollIntoView({ behavior: "smooth" })}>Incidents</li>
                        <li onClick={() => document.querySelector(".a").scrollIntoView({ behavior: "smooth" })}>Analytics</li>
                        <li>Settings</li>
                    </ul>
                </div>

                <div className="o"></div>
                <div className="content">
                    <div className="dashboard">
                    <div className="video">
                        <h1>Live Video Footage</h1>
                        <div className="container">
                        {videoData.map((video) => (
                            <div key={video.id} className="box" onClick={() => setPopupVideo(video)}>
                            <video className="live-video" autoPlay muted loop>
                                <source src={video.src} type="video/mp4" />
                            </video>
                            </div>
                        ))}
                        </div>
                    </div>

                    {/* Popup Video with Metadata */}
                    {popupVideo && (
                        <div className="popup-overlay">
                        <div className="popup-content" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            
                            {/* Video Section (Left Side) */}
                            <video 
                            className="popup-video" 
                            ref={videoRef} 
                            autoPlay 
                            muted 
                            controls 
                            style={{ width: "450px", height: "200px", flexShrink: 0 }} 
                            >
                            <source src={popupVideo.src} type="video/mp4" />
                            </video>

                            {/* Metadata Section (Right Side) */}
                            <div className="video-metadata" style={{ fontSize: "14px", textAlign: "left" }}>
                            <h2>{popupVideo.title}</h2>
                            <p><strong>📍 Location:</strong> {popupVideo.location}</p>
                            <p><strong>🚔 Police:</strong> {popupVideo.policeStation.name} ({popupVideo.policeStation.contact})</p>
                            <p><strong>🏥 Hospital:</strong> {popupVideo.hospital.name} ({popupVideo.hospital.contact})</p>
                            <p><strong>🚑 Ambulance:</strong> {popupVideo.ambulance}</p>
                            <p><strong>⚠ Impact:</strong> {popupVideo.impactRating}/10</p>
                            <button onClick={() => setPopupVideo(null)} style={{ marginTop: "10px" }}>Close</button>
                            <button
                            onClick={() => {
                                setPopupVideo(null);
                                window.location.href = "tel:8282823832";
                            }}
                            style={{ margin: "20px" }}
                            >
                            Emergency Call
                            </button>
                            </div>

                        </div>
                        </div>
                    )}
                    </div>
                    <div className="q"></div>
                    <h1 className="qu">Incidents</h1>
                    <div className="stats">
                        <div className="stat-card">
                            <h3>Total Incidents</h3>
                            <p>1,234</p>
                        </div>
                        <div className="stat-card">
                            <h3>Resolved Incidents</h3>
                            <p>1,000</p>
                        </div>
                        <div className="stat-card">
                            <h3>Pending Incidents</h3>
                            <p>234</p>
                        </div>
                    </div>

                    <div className="incident-map">
                        <h2>Incident Map</h2>
                        <div className="map-placeholder">
                            <IncidentMap />
                        </div>
                    </div>

                    <div className="recent-incidents">
                        <h2>Recent Incidents</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Location</th>
                                    <th>Severity</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>#201</td><td>Gandhipuram</td><td>High</td><td>Resolved</td></tr>
                                <tr><td>#202</td><td>RS Puram</td><td>Medium</td><td>Pending</td></tr>
                                <tr><td>#203</td><td>Peelamedu</td><td>Low</td><td>Resolved</td></tr>
                                <tr><td>#204</td><td>Saravanampatti</td><td>High</td><td>Ongoing</td></tr>
                                <tr><td>#205</td><td>Singanallur</td><td>Medium</td><td>Resolved</td></tr>
                                <tr><td>#206</td><td>Saibaba Colony</td><td>Low</td><td>Pending</td></tr>
                                <tr><td>#207</td><td>Sitra</td><td>High</td><td>Ongoing</td></tr>
                                <tr><td>#208</td><td>Kuniyamuthur</td><td>Medium</td><td>Resolved</td></tr>
                                <tr><td>#209</td><td>Ukkadam</td><td>High</td><td>Pending</td></tr>
                                <tr><td>#210</td><td>Town Hall</td><td>Low</td><td>Resolved</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='a'></div>
                    <h1 className='qu'>Analytics</h1>
                    {/* Graph Section */}
                    <div className="charts-container">
                    {/* Pie Chart - Left Side */}
                    <div className="chart">
                        <h2>Accident Severity Distribution</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie 
                                    data={severityData} 
                                    cx="50%" 
                                    cy="50%" 
                                    outerRadius={90} 
                                    fill="#8884d8" 
                                    dataKey="value" 
                                    label
                                >
                                    {severityData.map((entry, index) => (
                                        <Cell 
                                            key={`cell-${index}`} 
                                            fill={['#FF6F61', '#6B5B95', '#88B04B', '#FFA500', '#92A8D1'][index % 5]} 
                                        />
                                    ))}
                                </Pie>
                                <Tooltip 
                                    contentStyle={{
                                        backgroundColor: '#333',
                                        border: 'none',
                                        borderRadius: '5px',
                                        color: 'white',
                                    }}
                                />
                                <Legend 
                                    wrapperStyle={{
                                        paddingTop: '10px',
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Bar Chart - Right Side */}
                    <div className="chart">
                        <h2>Monthly Accident Count</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={monthlyAccidents}>
                                <XAxis 
                                    dataKey="month" 
                                    tick={{ fill: '#333' }}
                                />
                                <YAxis 
                                    tick={{ fill: '#333' }}
                                />
                                <Tooltip 
                                    contentStyle={{
                                        backgroundColor: '#333',
                                        border: 'none',
                                        borderRadius: '5px',
                                        color: '#fff',
                                    }}
                                />
                                <Legend 
                                    wrapperStyle={{
                                        paddingTop: '10px',
                                    }}
                                />
                                <Bar 
                                    dataKey="accidents" 
                                    fill="#FF6F61" 
                                    radius={[5, 5, 0, 0]} 
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="accident-data-summary">
                <h2>Accident Data Analysis Overview</h2>

                {/* Accident Severity Distribution Summary */}
                <div className="summary-section">
                    <h3>Accident Severity Distribution</h3>
                    <p>
                        The <strong>Accident Severity Distribution</strong> provides insights into the proportion of accidents categorized by severity. The pie chart uses five distinct colors to represent different levels of severity:
                    </p>
                    <ul>
                        <li><span style={{ color: '#FF6F61' }}>🔴 High Severity:</span> Critical accidents requiring immediate attention.</li>
                        <li><span style={{ color: '#6B5B95' }}>🟣 Moderate Severity:</span> Significant incidents but not life-threatening.</li>
                        <li><span style={{ color: '#88B04B' }}>🟢 Low Severity:</span> Minor accidents that are manageable.</li>
                        <li><span style={{ color: '#FFA500' }}>🟠 Warning Level:</span> Potential hazards that need monitoring.</li>
                        <li><span style={{ color: '#92A8D1' }}>🔵 Informational:</span> Low-impact incidents recorded for statistics.</li>
                    </ul>
                    <p>
                        This distribution helps authorities prioritize responses and allocate resources accordingly.
                    </p>
                </div>

                {/* Monthly Accident Count Summary */}
                <div className="summary-section">
                    <h3>Monthly Accident Count</h3>
                    <p>
                        The <strong>Monthly Accident Count</strong> bar chart provides a breakdown of accidents occurring each month. This helps visualize trends and identify peak accident periods.
                    </p>
                    <ul>
                        <li><strong>Peak Months:</strong> The highest number of accidents occur during certain months, possibly due to weather conditions, traffic congestion, or festival seasons.</li>
                        <li><strong>Low-Accident Months:</strong> Some months show significantly fewer accidents, indicating improved road safety during those periods.</li>
                        <li><strong>Ongoing Monitoring:</strong> The data suggests a need for increased safety measures in high-incident months.</li>
                    </ul>
                    <p>
                        With <span style={{ color: '#FF6F61' }}>color-coded</span> visualization, authorities can take proactive measures to prevent accidents.
                    </p>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewPage;
