export function StatsSection() {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 bg-white rounded-2xl p-12">
      <div className="text-center">
        <h3 className="text-5xl font-bold text-primary mb-3">10,000+</h3>
        <p className="text-lg text-muted-foreground">Verified Professionals</p>
      </div>
      <div className="text-center">
        <h3 className="text-5xl font-bold text-primary mb-3">50,000+</h3>
        <p className="text-lg text-muted-foreground">Completed Projects</p>
      </div>
      <div className="text-center">
        <h3 className="text-5xl font-bold text-primary mb-3">98%</h3>
        <p className="text-lg text-muted-foreground">Satisfied Customers</p>
      </div>
    </div>
  );
}