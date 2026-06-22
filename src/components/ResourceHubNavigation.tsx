import { Link } from "@tanstack/react-router";

export default function ResourceHubNavigation({
  currentPage,
}: {
  currentPage: string;
}) {
  const resources = [
    {
      title: "After Diagnosis",
      path: "/resources/after-diagnosis",
    },
    {
      title: "Choosing Schools",
      path: "/resources/choosing-schools",
    },
    {
      title: "Therapy Guidance",
      path: "/resources/therapy-guidance",
    },
    {
      title: "Daily Living Support",
      path: "/resources/daily-living-support",
    },
    {
      title: "Communication Tips",
      path: "/resources/communication-tips",
    },
    {
      title: "Behaviour Support",
      path: "/resources/behaviour-support",
    },
    {
      title: "Parent Wellbeing",
      path: "/resources/parent-wellbeing",
    },
    {
      title: "Government Schemes & Legal Rights",
      path: "/resources/government-schemes",
    },
    {
      title: "Down Syndrome Guide",
      path: "/resources/down-syndrome-guide",
    },
  ];

  return (
    <nav className="border-t border-slate-200 bg-slate-100/80 py-12">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <h4 className="mb-6 text-center font-serif text-sm font-bold uppercase tracking-wider text-slate-500">
          Explore the Project Jugnu Resource Hub
        </h4>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 text-center">
          {resources.map((resource) => (
            <Link
              key={resource.path}
              to={resource.path}
              className={
                currentPage === resource.path
                  ? "rounded-xl bg-purple-600 p-3 text-xs font-bold text-white border border-purple-600 shadow-sm"
                  : "rounded-xl bg-white p-3 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-purple-500 hover:text-purple-600 transition-all shadow-sm"
              }
            >
              {currentPage === resource.path
                ? `${resource.title} (Current)`
                : resource.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}