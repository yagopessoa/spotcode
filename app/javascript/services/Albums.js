import Api from "./Api";

const AlbumService = {
  index: () => Api.get("/dashboard"),
};

export default AlbumService;
