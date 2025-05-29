interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-montserrat">
          {title}
        </h1>
        {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHeader;
