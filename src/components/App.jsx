import { Component } from "react";
import { fetchImages } from "./Services/api";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { Loader } from "./Loader";
import { Modal } from "./Modal/Modal";

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

export class App extends Component {
  state = { 
    images: [],
    searchValue: "",
    page: 1,
    error: null,
    isLoading: false,
    modal: ""
  }

  async componentDidMount(prevProps, prevState) {
    if (this.state.searchValue !== prevState.searchValue || this.state.page !== prevState.page) {
      try {
        this.setState({ isLoading: true })

        const images = await fetchImages(
          this.state.searchValue,
          this.state.page
        )

        images.map(image => {
          return this.setState(prevState => ({
            images: [
              ...prevState.images,
              {
                id: image.id,
                webFormatURL: image.webFormatURL,
                largeImageURL: image.largeImageURL,
                tags: image.tags
              }
            ]
          }))
        })

      } catch (error) {
        this.setState({ error })

      } finally {
        this.setState({ isLoading: false })
      }
    }
  }

  render() {

    const { images } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.searchValue} />
        <ImageGallery images={images} />

      </div>
    )
  }
}