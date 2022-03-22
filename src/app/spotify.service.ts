import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }
  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const OAuth =
      'BQASUE-_2M_owPeqRtSn8JIDDGrrBlBAmlYlUi-rtW71wV18QixfZphtHV-y0fO7pBAM8OHjKh2oLcDBSVN2WJ1rJ10rv1kxy7VkjCrbk3-GTPdwXzYgZpvjniVcCIMz7hNZDLNIrmUwaG95q3hsGK5_ExlLUMyICjY';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${OAuth}`,
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
    //Ritorno un observable ai componenti che richiedono il servizio
  }
}
