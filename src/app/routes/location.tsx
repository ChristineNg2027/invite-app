/**
 * Page for user to enter location
 */
import PillButton from "src/app/utils/pillButton";
import LocationPicker from "../utils/locationSearch";

export default function Location() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Choose a Location</h1>
      <LocationPicker />

      <div className="fixed bottom-6 right-6 flex gap-2">
        <PillButton to="/">Home</PillButton>
        <PillButton to="/confirmation">Next</PillButton>
      </div>
    </div>
  );
}