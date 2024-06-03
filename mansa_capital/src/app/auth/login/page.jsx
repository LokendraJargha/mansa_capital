import { signIn } from "../../../../auth";
export default function Page () {
   return (

    <form
    action={async (formData) => {
      "use server";
      console.log(formData);
      try{

        await signIn("credentials", formData);
      }  
      catch (err) {
        console.log("err occured somthing occured",err)
  
      }
    
    }}
  >
  <input type= "name" name="email"/>
  <input type ="password" name="password"/>
  <button type="submit">Click Me</button>
  </form>
   )
}