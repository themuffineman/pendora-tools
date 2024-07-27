import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
  

const RecentCard = ({recentTitle, recentData}) => {
  return (
    <Card className="w-full bg-neutral-900 border-none">
        <CardHeader className="text-white">
            <CardTitle>Recent {recentTitle}</CardTitle>
        </CardHeader>
        <CardContent>
            <Table className="w-full">
                <TableCaption>A list of your recent {recentTitle}.</TableCaption>
                <TableHeader>
                    <TableRow className="hover:bg-neutral-800">
                        <TableHead className="w-[100px] text-white">Lead</TableHead>
                        <TableHead className="text-right text-white">Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {recentData?.map((data)=>(
                        <TableRow className="hover:bg-neutral-800 border-none">
                        <TableCell className="font-medium text-white">{data.email}</TableCell>
                        <TableCell className="text-right text-white">{data.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>              
        </CardContent>
    </Card>
  )
}

export default RecentCard