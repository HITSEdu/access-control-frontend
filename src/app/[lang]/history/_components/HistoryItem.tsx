'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, XCircle, Info } from 'lucide-react'
import { HistoryType } from '@/types/state.type'

type Props = {
  item: HistoryType
  dict: any
}

export default function HistoryItem({ item, dict }: Props) {
  const renderStatus = () => {
    switch (item.status) {
      case 'success':
        return (
          <Badge
            variant="outline"
            className="bg-green-100 text-green-700 flex items-center gap-1"
          >
            <CheckCircle className="h-4 w-4" />
            {dict.HistoryPage.success}
          </Badge>
        )
      case 'failed':
        return (
          <Badge
            variant="outline"
            className="bg-red-100 text-red-700 flex items-center gap-1"
          >
            <XCircle className="h-4 w-4" />
            {dict.HistoryPage.failed}
          </Badge>
        )
      default:
        return (
          <Badge
            variant="outline"
            className="bg-gray-100 text-gray-700 flex items-center gap-1"
          >
            <Info className="h-4 w-4" />
            {dict.HistoryPage.denied}
          </Badge>
        )
    }
  }

  return (
    <Card className="shadow-sm hover:shadow-md transition-all min-w-[30vw]">
      <CardHeader className="flex flex-col items-center justify-between">
        <CardTitle className="text-base font-semibold">
          {dict.HistoryPage.operation}
        </CardTitle>
        {renderStatus()}
      </CardHeader>

      <CardContent className="space-y-1 text-md flex flex-col items-start">
        <p>
          <span className="font-medium">{dict.HistoryPage.key}:</span>{' '}
          <span className="font-mono">{item.key_id}</span>
        </p>
        <p>
          <span className="font-medium">{dict.HistoryPage.lock}:</span>{' '}
          <span className="font-mono">{item.lock_id}</span>
        </p>
      </CardContent>
    </Card>
  )
}
