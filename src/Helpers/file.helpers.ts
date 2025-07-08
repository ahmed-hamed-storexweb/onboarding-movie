import FilesActions from "Actions/filesAction";

export async function handlePoster(
  poster: string | undefined,
  filesActions: FilesActions
) {
  if (poster) {
    poster = (
      await filesActions.saveFiles({
        keys: poster,
        security: "normal",
      })
    ).key;
  }
}