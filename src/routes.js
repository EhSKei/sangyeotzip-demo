import Chapter01 from "./routes/Chapter01.svelte";
import Chapter02 from "./routes/Chapter02.svelte";
import Chapter03 from "./routes/Chapter03.svelte";
import Chapter04 from "./routes/Chapter04.svelte";
import Chapter05 from "./routes/Chapter05.svelte";
import Chapter06 from "./routes/Chapter06.svelte";
import Epilogue from "./routes/Epilogue.svelte";
import Index from "./routes/Index.svelte";
import Prologue from "./routes/Prologue.svelte";

export default {
    '/': Index,
    '/prologue': Prologue,
    '/chapter01': Chapter01,
    '/chapter02': Chapter02,
    '/chapter03': Chapter03,
    '/chapter04': Chapter04,
    '/chapter05': Chapter05,
    '/chapter06': Chapter06,
    '/epilogue': Epilogue,

}