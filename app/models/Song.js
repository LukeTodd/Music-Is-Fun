export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    getTemplate() {
        return `
        <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card c-background">
            <img src="${this.albumArt}" class="card-img-top card-h" alt="...">
            <div class="card-body d-flex flex-column card-text vh100">
            <audio controls class="justify-self-end audio-display" id="pause">
                <source src="${this.preview}" type="audio/ogg">                    
                Your browser does not support the audio element.
            </audio>            
                <h3>Title: ${this.title}</h3>                
                <p>Album: ${this.collection}</p>
                <p>Artist: ${this.artist}</p>
                <p>Price: ${this.price}</p>                
            </div>
        </div>
        </div>
        `
    }
}