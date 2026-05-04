import { useAuth } from "./AuthContext";

/** Button that attempts to use the token in context when clicked */
export default function Tablet() {
  // TODO: call authenticate when form is submitted
  const { authenticate } = useAuth();

  async function handleAuth() {
    authenticate();
  }

  return (
    <section>
      <p>
        The sound of your name thuds against the gate as the two badgers furrow
        their brows. The badger on the right beckons you to approach.
      </p>
      <p>&quot;Only those who are pure of heart may pass.&quot;</p>
      <p>
        &quot;Place your hand upon this stone tablet, and thus will your true
        self be revealed.&quot;
      </p>
      <p>
        It holds out a rectangular stone tablet carved with an intricate design.
      </p>
      <form action={handleAuth}>
        <button>Place your palm upon the tablet.</button>
      </form>
    </section>
  );
}
/*When you click the button, the app sends a GET /authenticate request with your token in the header.
If successful, location becomes "TUNNEL", and <Tunnel /> renders.    */
