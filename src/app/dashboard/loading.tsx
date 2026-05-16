export default function DashboardLoading() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Skeleton */}
        <div className="glass-card p-6 shimmer" style={{ height: '120px' }} />

        {/* Stats Skeleton */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="stat-card shimmer" style={{ height: '72px' }} />
          ))}
        </div>

        {/* Day Tabs Skeleton */}
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="shimmer rounded-xl" style={{ width: '100px', height: '44px', background: 'var(--bg-glass)' }} />
          ))}
        </div>

        {/* Main Grid Skeleton */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card p-5 shimmer" style={{ height: '120px' }} />
            ))}
          </div>
          <div className="space-y-4">
            <div className="glass-card shimmer" style={{ height: '300px' }} />
            <div className="glass-card shimmer" style={{ height: '350px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
