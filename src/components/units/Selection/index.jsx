export default function Selection({ title = "" }) {
    return <div>
        <label className="text-d-orange-50 text-xs" forhtml="authorsOfTheWork">{title}es</label>
        <div className="text-orange-200">mais de um {title}</div>
    </div>;
}