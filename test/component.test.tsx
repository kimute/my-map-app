import { render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import mockResponse from "../public/myList.json";

import { Button } from "../components/Button";
import Mapbox from "../components/MapBox";
import { IMylocationData } from "../components/types";

describe("<Button/>", () => {
  it("it should be rendering with props", () => {
    render(<Button size={"xl"} actionText={"test botton"} disabled={false} />);
    screen.queryByText("test botton");
  });

  it("it should be deactivated", () => {
    const { container } = render(
      <Button size={"xl"} actionText={"test botton"} disabled={true} />
    );
    expect(container.firstChild).toHaveClass("disabled:bg-gray-500");
  });
});

describe("<MapBox/>", () => {
  fetchMock.enableMocks();
  let mock: IMylocationData[] = mockResponse;
  it("it shoudld be renders without crashing", () => {
    render(<Mapbox result={mock} />);
  });
  screen.queryByText("Korea");
});
