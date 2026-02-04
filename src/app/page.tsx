import { redirect } from "next/navigation";

function App() {
 const user = false;
 if (user) {
redirect("/dashboard")
 }
 redirect("/auth/login")
}

export default App
