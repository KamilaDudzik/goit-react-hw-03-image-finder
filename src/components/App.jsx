import { Component } from "react";
import { fetchImages } from "./Services/api";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Button } from "./Button/Button";

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
//       }}d
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

  async componentDidMount(prevState) {
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

  searchValue = e => {
    this.setState({
      searchValue: e,
      page: 1,
      images: [],
      error: null
    })
  }

  showImages = () => {
    const { images } = this.state;
    return images;
  }

  loadButtonVisible = () => {
    if (this.state.images.length < 12) return "none";
  }

  loadMoreButton = event => {
    if (event) {
      this.setState({ page: this.state.page + 1 });
    }
  }

  handlerModal = imageAd => this.setState({ modal: imageAd })

  handlerModalClose = event => this.setState({ modal: event })

  handlerModalShow = () => this.state.modal

  render() {

    const { images, isLoading, modal } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.searchValue} />
        <ImageGallery images={images} imageAd={this.handlerModal} />
        {isLoading && <Loader />}
        <div style={{ display: this.loadButtonVisible() }}>
          {!isLoading && <Button onClick={this.loadMoreButton} />}
        </div>
        {modal !== "" && (
          <Modal imageAd={this.handlerModalShow()} onClick={this.handlerModalClose} />
        )}
      </div>
    )
  }
}