export function ExperienceBar() {
    return (
        <header className="experience-Bar">
            <span>0px</span>
            <div>
                <div style={{ width: '50%' }}></div>
                <span className="current-experience" style={{ left: '50%' }}>300 xp</span>
            </div>
            <span>600px</span>
        </header>
    );
}