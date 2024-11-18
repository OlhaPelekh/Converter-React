import main from "../assets/images/main.png";

function HomePage() {
    const backgroundStyle = {
        width: '100%',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    };

    const headingStyle = {
        color: 'white',
        position: 'absolute',
        zIndex: 1,
    };

    return (
        <div style={backgroundStyle}>
            <img src={main} alt="main" style={{ position: 'absolute', width: '100%', height: '400px', objectFit: 'cover' }} />
            <h1 style={headingStyle}>Головна сторінка</h1>
        </div>
    );
}

export default HomePage;