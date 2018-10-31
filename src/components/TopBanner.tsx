import * as React from "react";
//  tslint:disable-next-line:no-console
interface IState {
  index: number;
  info: Array<{ index: number; title: string; season: string }>;
}
class TopBaner extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      index: 1,
      info: [
        { index: 1, title: "Woman Collection 2018", season: "New Season" },
        { index: 2, title: "Man Collection 2018", season: "New Arrivals" },
        { index: 3, title: "Man Collection 2018", season: "Jacket & Coats" }
      ]
    };
  }

  public slide: (event: React.MouseEvent | any) => void = event => {
    let index = this.state.index;
    let direction: number = 0;
    if (event) {
      direction = parseInt(
        event.currentTarget.attributes["data-direction"].value,
        10
      );
    } else {
      direction = 1;
    }

    index += direction;
    if (index <= 0) {
      index = 3;
    } else if (index >= 4) {
      index = 1;
    }
    this.setState({
      ...this.state,
      index
    });
  };

  public componentDidMount() {
    setInterval(() => {
      this.slide(null);
    }, 7000);
  }
  public render() {
    return (
      <div
        className="top-banner"
        style={{
          backgroundImage: `url(images/slide-0${this.state.index}.jpg)`
        }}
      >
        <button
          className="top-banner__arrow-btn top-banner__arrow-btn--left"
          data-direction="-1"
          onClick={this.slide}
        >
          {""}
        </button>
        <button
          className="top-banner__arrow-btn top-banner__arrow-btn--right"
          data-direction="1"
          onClick={this.slide}
        >
          {""}
        </button>
        <section>
          <p className="top-banner__title">
            <span> {this.state.info[this.state.index - 1].title}</span>
          </p>
          <p className="top-banner__banner-text">
            <span>{this.state.info[this.state.index - 1].season}</span>
          </p>
          <button className="round-corner-button top-banner__button">
            Shop Now
          </button>
        </section>
      </div>
    );
  }
}

export default TopBaner;
