"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
const Probablity = () => {
  return (
    <div className=" flex flex-row w-1/2 p-4 m-4">
      <Label className="flex w-4/5 text-lg" htmlFor="probablity">
        PROBABLITY
      </Label>
      <Select className="flex w-1/5">
        <SelectTrigger>
          <SelectValue placeholder="High" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel> </SelectLabel>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
export default Probablity;
