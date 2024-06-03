import { signIn } from "../../../../auth";
export default function Page () {
   return (

    <form
    action={async (formData) => {
      "use server";
      console.log(formData);
      await signIn("credentials", formData);
    }}
  >
  <input type= "name" name="email"/>
  <input type ="password" name="password"/>
  <button type="submit">Click Me</button>
  </form>
   )
}