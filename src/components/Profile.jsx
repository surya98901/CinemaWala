
const Profile = ()=>{
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Profile</h1>
            <img src="/usericon.png" alt="User Icon" className="w-32 h-32 mb-4" />
            <p className="text-lg">Welcome, [User Name]!</p>
            <p className="text-lg">Email: [User Email]</p>
        </div>
    )
}
export
