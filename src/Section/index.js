import "./style.css"
const Section = ({title, body, extraHeaderContent}) => (
    <section className="container">
            <div className="container__row">
                <h2>{title}</h2>
               {extraHeaderContent}
            </div>
           {body}
        </section>
);
export default Section;