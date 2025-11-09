import Image from "next/image";
import Link from "next/link";
import styles from "./BlogPreview.module.css";
import { Blog } from "@/static/blogData";

interface Props extends Blog {}

export default function BlogPreview({
  title,
  date,
  description,
  image,
  imageAlt,
  slug,
}: Props) {
  return (
    <Link href={`/blogs/${slug}`}>
      <article className={styles.card}>
        {image && (
          <Image
            src={image}
            alt={imageAlt}
            width={400}
            height={400}
            className={styles.image}
          />
        )}
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.date}>{date}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </article>
    </Link>
  );
}