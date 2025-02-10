import profilePic from "./assets/Kotresh.jpg"
export default function Card() {
    return (
        <div className="card-box">
            <img className="box-image" src={profilePic} alt="profile pic" />
            <h2 className="card-title">Kotresh hiremath</h2>
            <p className="card-text">i am fast learner,but things happen at time </p>
            <button style={{backgroundColor:"hsl(200,100%,50%)",padding:"10px 20px",color:"white",border:"None",borderRadius:"20px",cursor:"pointer"}}> submit</button>
        </div>
    )
}