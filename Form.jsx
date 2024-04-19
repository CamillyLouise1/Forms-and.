import "./Form.css"

const Form = () => {
    return(
        <>
        <section className="section">
         <h1>Learn to code by
            watching others
         </h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore aliquam accusamus iure harum praesentium, distinctio 
            magni a voluptates commodi, deserunt ab maxime ut eaque dolore dolores modi? 
            Quae, minus in.</p>
        </section>
        <div className="forms">
        <form action="">
            <input className="caixa" type="text" value="Firts Name"/> 
            <br/> <br />
            <input className="caixa" type="text" value="Last Name"/>
            <br /> <br />
            <input className="caixa" type="text" value="Email"/>
            <br /> <br />
            <input className="caixa" type="text" value="Password"/>
            <br /> <br />
            <input className="button" type="submit" value="Claim Your Free Trial"/>  
            <p>By clicking the button, you or are agreeing to our Terms and Services</p> 
        </form>
        </div>
        </>
    )
}

export default Form;