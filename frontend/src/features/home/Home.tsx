import React from "react";
import { useState, useEffect } from "react";
import Personal from "./compontnts/Personal";
import About from "./compontnts/About";
import Socials from "./compontnts/Socials";
import Skills from "./compontnts/Skills";
import Services from "./compontnts/Services";
import Projects from "./compontnts/Projects";
import Experience from "./compontnts/Experience";
import Education from "./compontnts/Education";
import Certifications from "./compontnts/Certifications";
import Contact from "./compontnts/Contact";

const Home = () => {
    const domain = import.meta.env.VITE_DOMAIN_URI || "http://localhost:5000/";
    const [portfolioData, setPortfolioData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const response = await fetch(`${domain}api/profile`);
                if (!response.ok) {
                    throw new Error("Failed to download portfolio information");
                }
                const jsonResult = await response.json();
                setPortfolioData(jsonResult);
            } catch (err) {
                console.log("error", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolio();
    }, []);

    if (loading) {
        return (
            <div style={{ padding: "50px", fontSize: "20px" }}>
                Loading homepage, please wait...
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ padding: "50px", color: "red" }}>
                Error: {error}. Make sure the backend is running.
            </div>
        );
    }

    if (!portfolioData || !portfolioData.portfolio) {
        return (
            <div style={{ padding: "50px" }}>
                No portfolio data found.
            </div>
        );
    }

    const {
        personal,
        about,
        socials,
        skills,
        services,
        projects,
        experience,
        education,
        certifications,
        contact
    } = portfolioData.portfolio;

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
            <Personal data={personal} />
            <Socials data={socials} />
            <About data={about} />
            <Skills data={skills} />
            <Services data={services} />
            <Projects data={projects} />
            <Experience data={experience} />
            <Education data={education} />
            <Certifications data={certifications} />
            <Contact data={contact} />
        </div>
    );
};

export default Home;
