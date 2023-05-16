import styles from "../styles/Additional.module.css"

const Additional = () => {
  return (
    <div className="information">
        <div className="home-header">
            <h1 className="header-head">Add additional sections to your resume</h1>
        </div>

        <div className="contact-form">
            <form action="">
                <div className="row-discuss">
                    <div className={styles.additionalDiv}>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">Accomplishment</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">Affiliations</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">Volunteer</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">Certifications</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">Add Your Own Sections</label>
                        </div>
                    </div>
                </div>
                <div className={styles.customSection}>
                    <input type="text" disabled />
                </div>
            </form>
        </div>
    </div>
  );
};

export default Additional