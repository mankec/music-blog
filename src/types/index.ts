export type AlbumType = {
	id: number
	artist_name?: any
	album_name: string
	tracks: any
	genres: any
	track_names?: any
	genre_names?: any
	year_of_release: number
	cover_img: string
}

export type ArtistType = {
	id: string
	artist_name?: any
}

export type GenreType = {
	id: string
	genre_names?: any
}
