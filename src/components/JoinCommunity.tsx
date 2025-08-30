import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const JoinCommunity = () => {
  return (
    <div className="p-12 bg-dark py-12 text-center text-white">
      {/* Blue box with text and button */}
      <div className="bg-primary p-6 rounded-lg max-w-3xl mx-auto m-12 border-2 border-secondary">
        <p className="text-xl mb-4">
          Join the Fun and Be the First to Hear About Our Tournaments and Exciting Updates!
        </p>
        <a href="x.com/stacksplays_" target="_blank" >
          <Button className="bg-chart-5 cursor-pointer text-white" variant="secondary"> <Users className="h-5 w-5" />
            Join Community
          </Button>
        </a>
      </div>
    </div>
  );
};

export default JoinCommunity