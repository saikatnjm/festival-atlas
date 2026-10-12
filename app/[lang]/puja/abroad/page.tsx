import type { Metadata } from "next";
import CollectionPage, { collectionMetadata } from "@/components/puja/CollectionPage";
import { LANGS } from "@/lib/i18n";
import { langOf } from "@/lib/route";

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return collectionMetadata(langOf((await params).lang), "abroad");
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  return <CollectionPage lang={langOf((await params).lang)} slug="abroad" />;
}
