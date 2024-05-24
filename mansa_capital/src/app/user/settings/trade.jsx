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

const TradeSettings = () => {
  return (
    <div className="flex flex-row w-1/2 p-4 m-4">
      <Label className="flex w-4/5 text-lg" htmlFor="tradeSettings">
        TRADE SETTINGS
      </Label>
      <Select className="flex w-1/5">
        <SelectTrigger>
          <SelectValue placeholder="LDN" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel> </SelectLabel>
            <SelectItem value="ldn">LDN</SelectItem>
            <SelectItem value="lull">LULL</SelectItem>
            <SelectItem value="ny">NY</SelectItem>
            <SelectItem value="asia">ASIA</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TradeSettings;
