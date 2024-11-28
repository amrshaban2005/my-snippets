import { db } from "@/db";
import { notFound } from "next/navigation";
import SinppetEditForm from "@/components/snippets-edit-form";

interface SnippetEditPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditSnippetPage(props: SnippetEditPageProps) {
  const { id } = await props.params;
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SinppetEditForm snippet={snippet} />
    </div>
  );
}
