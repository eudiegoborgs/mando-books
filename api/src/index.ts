import api from "./infrastructure/entrypoint/api";
import BooksSeed from "./seeds/books";

(async function() {
  BooksSeed.seed();
  const port = process.env.PORT || 9000;
  api.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
  });
})();
