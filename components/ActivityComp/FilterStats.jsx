import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const FilterStats = () => {
  return (
    <div className="mt-6 mx-4">
      <div className="flex items-center justify-end space-x-2 mb-2 text-end">
        <Switch id="airplane-mode" /> <Label htmlFor="airplane-mode">Yearly</Label>
      </div>
      <div className=" flex justify-between">
        <Select>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">2018</SelectItem>
            <SelectItem value="dark">2019</SelectItem>
            <SelectItem value="system">2020</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Jan</SelectItem>
            <SelectItem value="dark">Feb</SelectItem>
            <SelectItem value="system">March</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="text-center text-sm mt-3">
        Wow! You Read for <span className="font-medium">23 days</span> in <span className="font-medium">March, 2020</span>
      </div>
    </div>
  );
};

export default FilterStats;
