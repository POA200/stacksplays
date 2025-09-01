import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import StacksplaysWordsearch from "/public/StacksplaysWordsearch.png"

export function SectionCards() {

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">

      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="flex-col space-y-2">
            <img
              src={StacksplaysWordsearch}
              alt="Word Search"
              className="rounded-md w-full object-cover"
            />
          </CardDescription>
          <CardTitle className="flex-col items-side justify-center text-sm font-light">
            <div className="flex justify-between w-full">
              <div className="flex gap-1">Next game in:
                <Badge variant="outline">
                  7D 24h 50m 32s
                </Badge></div>
              <Badge variant="default">
                open
              </Badge>
            </div>
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex flex-col items-center justify-center gap-3 text-sm">
          <div className="flex-col items-side text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            WORD SEARCH
          </div>
          <Button className="w-full rounded-md text-2xl font-semi-bold p-6 cursor-pointer" size={"lg"}>
            Play Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
