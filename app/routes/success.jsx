import { Link, useCatch } from "@remix-run/react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowLeftIcon } from "~/components/Icon";

export default function Success() {
    const x = useMotionValue(0);
    const xInput = [-100, 0, 100];
    const color = useTransform(x, xInput, [
        // "rgb(211, 9, 225)",
        // "rgb(68, 0, 255)",
        // "rgb(3, 209, 0)"

        "rgb(211, 9, 225)",
        "rgb(68, 0, 255)",
        "rgb(47, 72,88)"
    ]);
    const tickPath = useTransform(x, [10, 100], [0, 1]);
    // const crossPathA = useTransform(x, [-10, -55], [0, 1]);
    // const crossPathB = useTransform(x, [-50, -100], [0, 1]);

    return (
        <main className="h-screen w-full bg-gradient-to-r from-[#f46b45] to-[#eea849] grid place-items-center">
            <div>
                <h1 className="font-heading text-3xl lg:text-6xl text-black">Success</h1>
                <motion.div>
                    <svg viewBox="0 0 50 50">
                        <motion.path
                            fill="none"
                            strokeWidth="2"
                            stroke={color}
                            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                            style={{ translateX: 5, translateY: 5 }}
                        />
                        <motion.path
                            fill="none"
                            strokeWidth="2"
                            stroke={color}
                            d="M14,26 L 22,33 L 35,16"
                            strokeDasharray="0 1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1, stroke: "rgb(47, 72, 88)" }}
                            transition={{ duration: 1 }}
                        />
                    </svg>
                </motion.div>
                <Link to="/" className="text-black hover:text-blue-600 underline flex justify-center gap-2 mt-2">
                    <ArrowLeftIcon /> Back to home
                </Link>
            </div>
        </main>
    );
}

export function CatchBoundary() {
    const caught = useCatch();

    return (
        <div className="text-black">
            <h1 className="font-bold text-3xl">Error!</h1>
            <p>Status: {caught.status}</p>
            <pre>
                <code>{caught.data}</code>
            </pre>
        </div>
    );
}

export function ErrorBoundary({ error }) {
    return (
        <div className="text-black">
            <h1 className="font-bold text-3xl">Error!</h1>
            <p>{error.message}</p>
            <p>The stack trace is:</p>
            <pre>{error.stack}</pre>
        </div>
    )
}