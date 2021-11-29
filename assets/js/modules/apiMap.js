import { Loader } from "@googlemaps/js-api-loader";


export default function apiMap() {
  const loader = new Loader({
    apiKey: "AIzaSyCF2qXSLUZsS0BebdOB8mSziQWLk6HEyzA",
    version: "weekly",
  });

  loader.load().then(() => {
    const coloredLocation = { lat: -22.893315, lng: -43.1943485 };

    const map = new google.maps.Map(document.querySelector("#map"), {
      center: coloredLocation,
      zoom: 15,
    });
    const marker = new google.maps.Marker({
      position: coloredLocation,
      map,
    });
  });
}
