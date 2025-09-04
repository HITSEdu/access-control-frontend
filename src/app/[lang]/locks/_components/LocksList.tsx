import SkeletonCard from '@/app/_components/LoadingSkeleton'

export default function LocksList({ dict }: any) {
  return (
    <div className="flex flex-col gap-2 max-w-md">
      <SkeletonCard />
    </div>
  )
}
