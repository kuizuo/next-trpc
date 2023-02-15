import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const hello = trpc.hello.useQuery({ text: "client" });
  // CMD+Click (or CTRL+Click) on `hello` to see the server-definition
  if (!hello.data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      {/* the type is defined and can be autocompleted */}
      <h1>{hello.data.greeting}</h1>
    </div>
  );
}
